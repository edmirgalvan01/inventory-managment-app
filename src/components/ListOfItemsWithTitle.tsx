import { ProductType } from "../types/products";
import { SaleType } from "../types/sales";
import ListOfItems from "./ListOfItems";

interface Props {
  title: string;
  type: "product" | "sale";
  list: ProductType[] | SaleType[];
}

export default function ListOfItemsWithTitle({ title, type, list }: Props) {
  return (
    <section className="listOfItemsWithTitle flex flex-col gap-[10px]">
      <h2 className="text-medium-blue font-semibold">{title}</h2>
      <ListOfItems type={type} list={list} />
    </section>
  );
}
