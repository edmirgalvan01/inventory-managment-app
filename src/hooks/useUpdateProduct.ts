import { useEffect, useState } from "react";
import { useGetProductById } from "./useGetProductById";
import { updateProduct } from "../database/products.service";
import { ProductWithoutIdType } from "../types/products";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useUpdateProduct(productId: number) {
  const navigate = useNavigate();
  const { product } = useGetProductById(productId);

  const [newProduct, setNewProduct] = useState<
    ProductWithoutIdType | undefined
  >({
    name: product?.name ?? "",
    unity: product?.unity ?? "",
    quantity: product?.quantity ?? "",
    price: product?.price ?? "",
  });

  useEffect(() => {
    setNewProduct({
      name: product?.name ?? "",
      unity: product?.unity ?? "",
      quantity: product?.quantity ?? "",
      price: product?.price ?? "",
    });
  }, [product]);

  const updateNewProduct = (property: string, value: string) => {
    setNewProduct({
      ...newProduct,
      [property]: value,
    } as ProductWithoutIdType);
  };

  const saveNewProduct = () => {
    const productToSave = {
      name: newProduct!.name,
      unity: newProduct!.unity,
      quantity: newProduct!.quantity,
      price: newProduct!.price,
    };

    updateProduct(productId, productToSave).then((response) => {
      if (!response.error) {
        toast.success("Producto actualizado correctamente.");
        setTimeout(() => {
          navigate("/inventory");
        }, 1500);
      } else {
        //TODO: Error handler
      }
    });
  };

  return { newProduct, updateNewProduct, saveNewProduct };
}
