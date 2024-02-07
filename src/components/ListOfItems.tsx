import { ProductType } from "../types/products";
import { SaleType } from "../types/sales";
import ItemCard from "./ItemCard";
import SaleCard from "./SaleCard";

type Props = {
  type: "product" | "sale";
  list: ProductType[] | SaleType[];
};

export default function ListOfItems({ type, list }: Props) {
  if (list.length === 0)
    return (
      <h1 className="font-nunito text-medium-blue font-bold text-xl">
        No hay items por mostrar
      </h1>
    );

  return (
    <ul className="listOfItems flex flex-col gap-[10px]">
      {list.map((item) => {
        if (type === "product") {
          const { id, name, quantity, price, unity } = item as ProductType;
          return (
            <ItemCard
              id={id}
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
            <SaleCard
              key={id}
              product_id={product_id}
              date={date}
              total={total}
            />
          );
        }
      })}
    </ul>
  );
}
