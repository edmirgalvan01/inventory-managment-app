import { getProductById } from "./database/products.service";

export async function checkIfProductIsAvailable(
  productId: number,
  quantitySold: number
) {
  const productResponse = await getProductById(productId);

  if (productResponse.error || productResponse.products?.length === 0) {
    console.error("checkIfProductIsAvailable", productResponse.error);
    return { success: false, error: "El producto no esta disponible" };
  }

  const product = productResponse.products![0];

  if (quantitySold > product.quantity) {
    return { success: false, error: "No hay suficiente producto en stock" };
  } else {
    return { success: true, error: "" };
  }
}

export async function calculateNewStock(
  productId: number,
  quantitySold: number
) {
  const productResponse = await getProductById(productId);

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

export function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  const dateBase = date.toLocaleString("es-ES", { month: "long" });

  const firstLetter = dateBase.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = dateBase.slice(1);
  return firstLetterCap + remainingLetters;
}
