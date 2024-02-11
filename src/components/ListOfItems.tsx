import { PostgrestError } from "@supabase/supabase-js";
import { ProductType } from "../types/products";
import { SaleType } from "../types/sales";
import { SecondaryButton } from "./Buttons";
import ProductCard from "./ProductCard";
import SaleCard from "./SaleCard";
import { Link } from "react-router-dom";
import { LoaderSpinner } from "./LoaderSpinner";

type Props = {
  type: "product" | "sale";
  list: ProductType[] | SaleType[];
  isLoading: boolean;
  error: PostgrestError | null;
};

export default function ListOfItems({ type, list, isLoading, error }: Props) {
  if (isLoading) {
    return (
      <div className="w-full h-[70dvh] flex justify-center items-center">
        <LoaderSpinner />
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <h1 className="font-nunito text-medium-blue font-bold text-xl">
        No hay items por mostrar
      </h1>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-error-red font-bold text-lg">{error.code}</h2>
        <p className="text-error-red font-semibold">{error.message}</p>
        <SecondaryButton>
          <Link to="/">Intentalo mas tarde</Link>
        </SecondaryButton>
      </div>
    );
  }

  return (
    <ul className="listOfItems flex flex-col gap-[10px]">
      {list.map((item) => {
        if (type === "product") {
          const { id, name, quantity, price, unity } = item as ProductType;
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              stock={`${quantity}${unity}`}
              price={price}
            />
          );
        }

        if (type === "sale") {
          const { id, total, product_id, date } = item as SaleType;
          return (
            <SaleCard
              key={id}
              id={id}
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
