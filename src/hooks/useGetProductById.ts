import { useEffect, useState, useCallback } from "react";
import { getProductById } from "../database/products.service";
import { ProductType } from "../types/products";
import { PostgrestError } from "@supabase/supabase-js";

export function useGetProductById(productId: number) {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProductById(productId);
      setError(response.error);
      setProduct(response.products![0]);
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { product, error, isLoading };
}
