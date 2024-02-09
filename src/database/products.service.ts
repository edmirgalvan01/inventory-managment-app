import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { ProductType, ProductWithoutIdType } from "../types/products";

export async function getProducts(): Promise<{
  products: ProductType[] | null;
  error: PostgrestError | null;
}> {
  const { data: products, error } = await supabase.from("products").select("*");

  return { products, error };
}

export async function getProductById(productId: number): Promise<{
  products: ProductType[] | null;
  error: PostgrestError | null;
}> {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId);

  return { products, error };
}

export async function insertProduct(product: ProductWithoutIdType): Promise<{
  data: ProductType[] | null;
  error: PostgrestError | null;
}> {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  return { data, error };
}

export async function updateProduct(
  productId: number,
  newProduct: ProductWithoutIdType
) {
  const { data, error } = await supabase
    .from("products")
    .update(newProduct)
    .eq("id", productId)
    .select();

  return { data, error };
}

export async function deleteProduct(productId: number): Promise<{
  error: PostgrestError | null;
}> {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);

  return { error };
}
