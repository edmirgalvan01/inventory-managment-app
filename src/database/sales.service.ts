import { PostgrestError } from "@supabase/supabase-js";
import {
  SaleType,
  SaleWithProductType,
  SaleWithoutIdType,
} from "../types/sales";
import { supabase } from "./supabaseClient";
import { calculateNewStock, checkIfProductIsAvailable } from "../utils";
import { updateProductQuantity } from "./products.service";

export async function getSales(): Promise<{
  sales: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { data: sales, error } = await supabase.from("sales").select("*");

  return { sales, error };
}

export async function getSaleById(saleId: number): Promise<{
  sales: SaleWithProductType[] | null;
  error: PostgrestError | null;
}> {
  const { data: sales, error } = await supabase
    .from("sales")
    .select("*, products(*)")
    .eq("id", saleId);

  return { sales, error };
}

export async function insertSale(sale: SaleWithoutIdType): Promise<{
  success: boolean;
  data: SaleType[] | null;
  error: string | undefined;
}> {
  const availableResponse = await checkIfProductIsAvailable(
    sale.product_id,
    sale.quantity
  );

  // Si no esta disponible el producto, retorna un error
  if (!availableResponse.success) {
    return { success: false, data: [], error: availableResponse.error };
  } else {
    // Calculamos el nuevo stock
    const stockResponse = await calculateNewStock(
      sale.product_id,
      sale.quantity
    );

    // Actualizamos el stock del producto
    const updateProductResponse = await updateProductQuantity(
      sale.product_id,
      stockResponse.newStock
    );

    // Si hubo errores en la actualizacion, retornamos un error
    if (updateProductResponse.error) {
      return {
        success: false,
        data: [],
        error: updateProductResponse.error.message,
      };
    } else {
      // Insertamos en base de datos la nueva venta
      const { data, error } = await supabase
        .from("sales")
        .insert([sale])
        .select();

      return { success: false, data, error: error?.message };
    }
  }
}

export async function updateSale(saleId: number, newSale: SaleWithoutIdType) {
  const { data, error } = await supabase
    .from("sales")
    .update(newSale)
    .eq("id", saleId)
    .select();

  return { data, error };
}

export async function deleteSale(saleId: number) {
  const { error } = await supabase.from("sales").delete().eq("id", saleId);
  return { error };
}
