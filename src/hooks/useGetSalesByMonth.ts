import { useEffect, useState, useCallback } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { SaleType } from "../types/sales";
import { getSalesByMonth } from "../database/sales.service";
import { MONTHS_RANGE } from "../consts";

export function useGetSalesByMonth(monthNumber: keyof typeof MONTHS_RANGE) {
  const [sales, setSales] = useState<SaleType[] | null>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSales = useCallback(async () => {
    try {
      const response = await getSalesByMonth(monthNumber);
      setError(response.error);
      setSales(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [monthNumber]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  return { sales, error, isLoading };
}
