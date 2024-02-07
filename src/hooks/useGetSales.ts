import { useEffect, useState, useCallback } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { SaleType } from "../types/sales";
import { getSales } from "../database/sales.service";

export function useGetSales() {
  const [sales, setSales] = useState<SaleType[] | null>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSales = useCallback(async () => {
    try {
      const response = await getSales();
      setError(response.error);
      setSales(response.sales);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  return { sales, error, isLoading };
}
