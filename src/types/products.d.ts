export type ProductType = {
  id: number;
  name: string;
  quantity: float;
  price: float;
  unity: string;
};

export type ProductWithoutIdType = {
  name: string;
  quantity: float;
  price: float;
  unity: string;
};
