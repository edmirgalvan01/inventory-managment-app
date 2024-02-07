import { PostgrestError } from "@supabase/supabase-js";
import { SaleType } from "../types/sales";
import { supabase } from "./supabaseClient";

export async function getSales(): Promise<{
  sales: SaleType[] | null;
  error: PostgrestError | null;
}> {
  const { data: sales, error } = await supabase.from("sales").select("*");

  return { sales, error };
}
