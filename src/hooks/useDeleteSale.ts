import { useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { deleteSale } from "../database/sales.service";

export function useDeleteSale() {
  const [error, setError] = useState<PostgrestError | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const removeSale = (saleId: number) => {
    deleteSale(saleId)
      .then(({ error }) => {
        if (error) {
          setError(error);
        } else {
          toast.success("Venta eliminada correctamente.");
          setTimeout(() => {
            navigate("/sales");
          }, 1500);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { error, isLoading, removeSale };
}
