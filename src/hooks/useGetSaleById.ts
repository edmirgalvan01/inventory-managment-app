import { useEffect, useState, useCallback } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { SaleWithProductType } from "../types/sales";
import { getSaleById } from "../database/sales.service";

export function useGetSaleById(saleId: number) {
  const [sale, setSale] = useState<SaleWithProductType | undefined>();
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSales = useCallback(async () => {
    try {
      const response = await getSaleById(saleId);
      setError(response.error);
      setSale(response.sales![0]);
    } finally {
      setIsLoading(false);
    }
  }, [saleId]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  return { sale, error, isLoading };
}
