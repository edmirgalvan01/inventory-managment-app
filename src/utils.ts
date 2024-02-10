import { getProductById } from "./database/products.service";

export async function checkIfProductIsAvailable(
  productId: number,
  quantitySold: number
) {
  // 1. Get the product sold by ID
  const productResponse = await getProductById(productId);

  // 2. If there was an error or the product does not exist, return an error.
  if (productResponse.error || productResponse.products?.length === 0) {
    console.error("checkIfProductIsAvailable", productResponse.error);
    return { success: false, error: "The product is not available" };
  }

  const product = productResponse.products![0];

  // 3. If there's a product, verify that the quantity sold is less than or equal to the stock of the product.
  if (quantitySold > product.quantity) {
    // 4. If quantity is greater than the stock, return an error.
    return { success: false, error: "Not enough product in stock" };
  } else {
    // 5. If quantity is less than or equal to stock, return true
    return { success: true, error: "" };
  }
}

export async function calculateNewStock(
  productId: number,
  quantitySold: number
) {
  // 1. Get the product sold by ID
  const productResponse = await getProductById(productId);

  // 2. If there was an error or the product does not exist, return an error.
  if (productResponse.error || productResponse.products?.length === 0) {
    console.error("calculateNewStock", productResponse.error);
    return {
      success: false,
      newStock: 0,
      error: "The product is not available",
    };
  }

  const product = productResponse.products![0];
  const newStock = product.quantity - quantitySold;

  return { success: true, error: "", newStock };
}
