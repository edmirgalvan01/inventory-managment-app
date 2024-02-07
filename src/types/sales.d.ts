export type SaleType = {
  id: number;
  quantity: float;
  total: float;
  product_id: number;
  date: string;
};

export type SaleWithoutIdType = {
  quantity: float;
  total: float;
  product_id: number;
  date: string;
};
