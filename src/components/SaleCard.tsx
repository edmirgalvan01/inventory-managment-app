import { Link } from "react-router-dom";
import { useGetProductById } from "../hooks/useGetProductById";

interface Props {
  product_id: number;
  date: string;
  total: number;
}

export default function SaleCard({ product_id, date, total }: Props) {
  const { product, isLoading } = useGetProductById(product_id);
  const hrefValue = `/sale/${product_id}`;

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <Link to={hrefValue}>
          <li className="font-inter bg-soft-white min-w-[300px] px-[20px] py-[15px] rounded-[24px] flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-medium-blue font-semibold">
                {product?.name}
              </span>
              <small className="text-[13px] text-light-blue">{date}</small>
            </div>
            <span className="text-[20px] font-bold text-medium-blue">
              ${total}
            </span>
          </li>
        </Link>
      )}
    </>
  );
}
