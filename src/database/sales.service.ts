import { PostgrestError } from "@supabase/supabase-js";
import { SaleType, SaleWithoutIdType } from "../types/sales";
import { supabase } from "./supabaseClient";

export async function getSales(): Promise<{
  sales: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { data: sales, error } = await supabase.from("sales").select("*");

  return { sales, error };
}

export async function insertSale(sale: SaleWithoutIdType): Promise<{
  data: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { data, error } = await supabase.from("sales").insert([sale]).select();

  return { data, error };
}
