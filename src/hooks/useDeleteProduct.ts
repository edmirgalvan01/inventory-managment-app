import { useState } from "react";
import { deleteProduct } from "../database/products.service";
import { PostgrestError } from "@supabase/supabase-js";

export function useDeleteProduct() {
  const [error, setError] = useState<PostgrestError | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const removeProduct = (productId: number) => {
    deleteProduct(productId)
      .then(({ error }) => {
        if (error) setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { error, isLoading, removeProduct };
}
