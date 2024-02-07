import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  stock: string;
  price: number;
}

export default function ProductCard({ id, name, stock, price }: Props) {
  const hrefValue = `/product/${id}`;

  return (
    <Link to={hrefValue}>
      <li className="font-inter bg-soft-white min-w-[300px] px-[20px] py-[15px] rounded-[24px] flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-medium-blue font-semibold">{name}</span>
          <small className="text-[13px] text-light-blue">{stock}</small>
        </div>
        <span className="text-[20px] font-bold text-medium-blue">${price}</span>
      </li>
    </Link>
  );
}
