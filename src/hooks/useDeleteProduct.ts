import { useState } from "react";
import { deleteProduct } from "../database/products.service";
import { PostgrestError } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useDeleteProduct() {
  const [error, setError] = useState<PostgrestError | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const removeProduct = (productId: number) => {
    deleteProduct(productId)
      .then(({ error }) => {
        if (error) {
          setError(error);
        } else {
          toast.success("Producto eliminado correctamente.");
          setTimeout(() => {
            navigate("/sales");
          }, 1500);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { error, isLoading, removeProduct };
}
