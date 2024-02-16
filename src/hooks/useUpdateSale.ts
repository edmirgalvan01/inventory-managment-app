import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetSaleById } from "./useGetSaleById";
import { SaleWithoutIdType } from "../types/sales";
import { updateSale } from "../database/sales.service";
import { calculateNewStock, checkIfProductIsAvailable } from "../utils";
import { updateProductQuantity } from "../database/products.service";

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

  const saveNewSale = async () => {
    const saleToSave = {
      product_id: newSale!.product_id,
      quantity: newSale!.quantity,
      total: newSale!.total,
      date: newSale!.date,
    };

    // Revisamos si la nueva cantidad esta disponible
    const stockResponse = await checkIfProductIsAvailable(
      saleToSave.product_id,
      saleToSave.quantity
    );

    // Si no esta disponible, mandamos un mensaje de error
    if (stockResponse.error) {
      toast.error(stockResponse.error);
    } else {
      // Si esta disponible, actualizamos la venta
      const saleResponse = await updateSale(saleId, saleToSave);

      // Si hay un error en la actualizacion de la venta
      if (saleResponse.error) {
        toast.error(saleResponse.error.message);
      } else {
        // 1. Calculamos el nuevo stock
        const newStock = await calculateNewStock(
          saleToSave.product_id,
          saleToSave.quantity
        );

        if (!newStock.error) {
          // 2. Actualizamos el producto con el nuevo stock
          const newProduct = await updateProductQuantity(
            saleToSave.product_id,
            newStock.newStock
          );

          if (!newProduct.error) {
            toast.success("Venta actualizada correctamente.");
            setTimeout(() => {
              navigate("/sales");
            }, 1500);
          } else {
            toast.error(newProduct.error.message);
          }
        } else {
          toast.error(newStock.error);
        }
      }
    }
  };

  return { newSale, updateNewSale, saveNewSale };
}
