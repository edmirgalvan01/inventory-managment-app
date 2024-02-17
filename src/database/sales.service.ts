import { PostgrestError } from "@supabase/supabase-js";
import {
  SaleType,
  SaleWithProductType,
  SaleWithoutIdType,
} from "../types/sales";
import { supabase } from "./supabaseClient";
import {
  calculateNewStock,
  checkIfProductIsAvailable,
  checkValideDate,
} from "../utils";
import { updateProductQuantity } from "./products.service";
import { MONTHS_RANGE } from "../consts";

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
  // Revisar si la cantidad insertada esta disponible
  const availableResponse = await checkIfProductIsAvailable(
    sale.product_id,
    sale.quantity
  );

  // Si no esta disponible, retorna un error
  if (!availableResponse.success) {
    return { success: false, data: [], error: availableResponse.error };
  } else {
    // Calculamos el nuevo stock
    const stockResponse = await calculateNewStock(
      sale.product_id,
      sale.quantity
    );

    // Revisar si la fecha de la venta no es mayor a hoy
    const checkDate = checkValideDate(sale.date);
    if (!checkDate) {
      return {
        success: false,
        data: [],
        error: "La fecha es mayor al día de hoy",
      };
    }

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

export async function getSalesByMonth(
  month: keyof typeof MONTHS_RANGE
): Promise<{
  data: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { from, to } = MONTHS_RANGE[month];

  const fromDate = new Date(from);
  const toDate = new Date(to);

  const fromDateFix = fromDate.toISOString();
  const toDateFix = toDate.toISOString();

  const { data, error } = await supabase
    .from("sales")
    .select()
    .gte("date", fromDateFix)
    .lte("date", toDateFix);

  return { data, error };
}
