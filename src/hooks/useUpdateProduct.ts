import { useEffect, useState } from "react";
import { useGetProductById } from "./useGetProductById";

export function useUpdateProduct(productId: number) {
  const { product } = useGetProductById(productId);

  const [newProduct, setNewProduct] = useState({
    newName: product?.name,
    newUnity: product?.unity,
    newQuantity: product?.quantity,
    newPrice: product?.price,
  });

  useEffect(() => {
    setNewProduct({
      newName: product?.name,
      newUnity: product?.unity,
      newQuantity: product?.quantity,
      newPrice: product?.price,
    });
  }, [product]);

  const updateNewProduct = (property: string, value: string) => {
    setNewProduct({
      ...newProduct,
      [property]: value,
    });
  };

  const saveNewProduct = () => {
    const productToSave = {
      name: newProduct.newName,
      unity: newProduct.newUnity,
      quantity: newProduct.newQuantity,
      price: newProduct.newPrice,
    };

    //TODO: saveNewProduct(newProduct)
  };

  return { newProduct, updateNewProduct, saveNewProduct };
}
