import { useEffect, useState } from "react";
import { useGetProductById } from "./useGetProductById";
import { updateProduct } from "../database/products.service";
import { ProductWithoutIdType } from "../types/products";

export function useUpdateProduct(productId: number) {
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

    updateProduct(productId, productToSave);
  };

  return { newProduct, updateNewProduct, saveNewProduct };
}
