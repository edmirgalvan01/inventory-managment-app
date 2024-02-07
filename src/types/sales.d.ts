import { ProductType } from "./products";

export type SaleType = {
  id: number;
  quantity: float;
  total: float;
  product_id: number;
  date: string;
};

export type SaleTypeWithProduct = {
  id: number;
  quantity: float;
  total: float;
  product_id: number;
  date: string;
  products: ProductType;
};

export type SaleWithoutIdType = {
  quantity: float;
  total: float;
  product_id: number;
  date: string;
};
