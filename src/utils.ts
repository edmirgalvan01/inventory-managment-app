import { getProductById } from "./database/products.service";

export async function checkIfProductIsAvailable(
  productId: number,
  quantitySold: number
) {
  // 1. Obtener el producto vendido por su ID
  const productResponse = await getProductById(productId);

  // 2. Si hubo un error o el producto no existe, retornar un mensaje de error
  if (productResponse.error || productResponse.products?.length === 0) {
    console.error("checkIfProductIsAvailable", productResponse.error);
    return { success: false, error: "The product is not available" };
  }

  // 3. Si el producto existe, verificar que la cantidad vendida sea menor o igual al stock del producto
  const product = productResponse.products![0];

  if (quantitySold > product.quantity) {
    // 4. Si la cantidad es mayor al stock, retornar un mensaje de error
    return { success: false, error: "Not enough product in stock" };
  } else {
    // 5. Si la cantidad es menor o igual al stock, retornar true
    return { success: true, error: "" };
  }
}
