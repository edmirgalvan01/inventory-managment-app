import { ProductType } from "../types/products";
import { SaleType } from "../types/sales";
import ItemCard from "./ItemCard";

type Props = {
  type: "product" | "sale";
  list: ProductType[] | SaleType[];
};

export default function ListOfItems({ type, list }: Props) {
  return (
    <ul className="listOfItems flex flex-col gap-[10px]">
      {list.map((item) => {
        if (type === "product") {
          const { id, name, quantity, price, unity } = item as ProductType;
          return (
            <ItemCard
              key={id}
              type="product"
              title={name}
              subtitle={`${quantity} ${unity}`}
              amount={price}
            />
          );
        }

        if (type === "sale") {
          const { id, total, product_id, date } = item as SaleType;
          return (
            <ItemCard
              key={id}
              type="sale"
              title={`${product_id}`}
              subtitle={date}
              amount={total}
            />
          );
        }
      })}
    </ul>
  );
}
