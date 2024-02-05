import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../database/products.service";
import { ProductType } from "../types/products";
import { PostgrestError } from "@supabase/supabase-js";

export function useGetProducts() {
  const [products, setProducts] = useState<ProductType[] | null>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProducts();
      setError(response.error);
      setProducts(response.products);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, error, isLoading };
}
