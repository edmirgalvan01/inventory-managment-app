import { useState } from "react";
import { SaleWithoutIdType } from "../types/sales";
import { insertSale } from "../database/sales.service";

export function useInsertSale() {
  const [sale, setSale] = useState<SaleWithoutIdType>({
    product_id: 0,
    quantity: 0,
    date: "",
    total: 0,
  });

  const updateSale = (property: string, value: string) => {
    setSale({
      ...sale,
      [property]: value,
    });
  };

  const saveSale = async () => {
    const { data, error } = await insertSale(sale);
    return { data, error };
  };

  return { sale, updateSale, saveSale };
}
