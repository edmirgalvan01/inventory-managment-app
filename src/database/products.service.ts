import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { ProductType } from "../types/products";

export async function getProducts(): Promise<{
  products: ProductType[] | null;
  error: PostgrestError | null;
}> {
  const { data: products, error } = await supabase.from("products").select("*");

  return { products, error };
}
