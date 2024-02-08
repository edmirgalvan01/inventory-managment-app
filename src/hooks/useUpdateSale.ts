import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetSaleById } from "./useGetSaleById";
import { SaleWithoutIdType } from "../types/sales";
import { updateSale } from "../database/sales.service";

export function useUpdateSale(saleId: number) {
  const navigate = useNavigate();
  const { sale } = useGetSaleById(saleId);

  const [newSale, setNewSale] = useState<SaleWithoutIdType | undefined>({
    product_id: sale?.products.id ?? 0,
    quantity: sale?.quantity ?? "",
    total: sale?.total ?? "",
    date: sale?.date ?? "",
  });

  useEffect(() => {
    setNewSale({
      product_id: sale?.products.id ?? 0,
      quantity: sale?.quantity ?? "",
      total: sale?.total ?? "",
      date: sale?.date ?? "",
    });
  }, [sale]);

  const updateNewSale = (property: string, value: string) => {
    setNewSale({
      ...newSale,
      [property]: value,
    } as SaleWithoutIdType);
  };

  const saveNewSale = () => {
    const saleToSave = {
      product_id: newSale!.product_id,
      quantity: newSale!.quantity,
      total: newSale!.total,
      date: newSale!.date,
    };

    updateSale(saleId, saleToSave).then((response) => {
      if (!response.error) {
        toast.success("Venta actualizada correctamente.");
        setTimeout(() => {
          navigate("/sales");
        }, 1500);
      } else {
        //TODO: Error handler
      }
    });
  };

  return { newSale, updateNewSale, saveNewSale };
}
