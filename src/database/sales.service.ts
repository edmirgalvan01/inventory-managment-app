import { PostgrestError } from "@supabase/supabase-js";
import {
  SaleType,
  SaleWithProductType,
  SaleWithoutIdType,
} from "../types/sales";
import { supabase } from "./supabaseClient";

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
  data: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { data, error } = await supabase.from("sales").insert([sale]).select();

  return { data, error };
}

export async function updateSale(saleId: number, newSale: SaleWithoutIdType) {
  const { data, error } = await supabase
    .from("sales")
    .update(newSale)
    .eq("id", saleId)
    .select();

  return { data, error };
}
