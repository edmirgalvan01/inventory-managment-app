import { useEffect, useState } from "react";
import { getProductById } from "../database/products.service";
import { ProductType } from "../types/products";

export function useCheckIfProductIsAvailable(
  productId: number,
  quantitySold: number
) {
  const [product, setProduct] = useState<ProductType>();
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      // 1. Get the product sold by ID
      const productResponse = await getProductById(productId);

      // 2. If there was an error or the product does not exist, return an error.
      if (productResponse.error || productResponse.products?.length === 0) {
        console.error("checkIfProductIsAvailable", productResponse.error);
        setResponse({ success: false, error: "The product is not available" });
      }

      setProduct(productResponse.products![0]);
    }

    fetchProduct();
  }, [productId]);

  // 3. If there's a product, verify that the quantity sold is less than or equal to the stock of the product.
  if (quantitySold > product!.quantity) {
    // 4. If quantity is greater than the stock, return an error.
    setResponse({ success: false, error: "Not enough product in stock" });
  } else {
    // 5. If quantity is less than or equal to stock, return true
    setResponse({ success: true, error: "" });
  }

  return response;
}
