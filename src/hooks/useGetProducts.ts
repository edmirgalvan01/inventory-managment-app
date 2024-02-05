import { useEffect, useState } from "react";
import { getProducts } from "../database/products.service";
import { ProductType } from "../types/products";
import { PostgrestError } from "@supabase/supabase-js";

export function useGetProducts() {
  const [products, setProducts] = useState<ProductType[] | null>();
  const [error, setError] = useState<PostgrestError | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setError(response.error);
        setProducts(response.products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, error, isLoading };
}
