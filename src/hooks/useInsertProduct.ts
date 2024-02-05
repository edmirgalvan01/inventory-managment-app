import { useState } from "react";
import { ProductWithoutIdType } from "../types/products";
import { insertProduct } from "../database/products.service";

export function useInsertProduct() {
  const [product, setProduct] = useState<ProductWithoutIdType>({
    name: "",
    quantity: 0,
    price: 0,
    unity: "",
  });

  const updateProduct = (property: string, value: string) => {
    setProduct({ ...product, [property]: value });
  };

  const saveProduct = async (product: ProductWithoutIdType) => {
    const response = await insertProduct(product);
    return response;
  };

  return { product, updateProduct, saveProduct };
}
