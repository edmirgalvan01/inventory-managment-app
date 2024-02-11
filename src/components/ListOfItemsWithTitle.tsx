import { ProductType } from "../types/products";
import { SaleType } from "../types/sales";
import ListOfItems from "./ListOfItems";

interface Props {
  title: string;
  type: "product" | "sale";
  list: ProductType[] | SaleType[];
  isLoading: boolean;
}

export default function ListOfItemsWithTitle({
  title,
  type,
  list,
  isLoading,
}: Props) {
  return (
    <section className="flex flex-col gap-[10px]">
      <h2 className="font-nunito text-medium-blue font-bold">{title}</h2>
      <ListOfItems type={type} list={list} isLoading={isLoading} />
    </section>
  );
}
