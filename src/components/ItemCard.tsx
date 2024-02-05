import { Link } from "react-router-dom";

interface Props {
  type: "product" | "sale";
  id: number;
  title: string;
  subtitle: string;
  amount: number;
}

export default function ItemCard({ type, id, title, subtitle, amount }: Props) {
  const hrefValue = type === "product" ? `/product/${id}` : `/sale/${id}`;

  return (
    <Link to={hrefValue}>
      <li className="itemCard bg-soft-white min-w-[300px] px-[20px] py-[15px] rounded-[24px] flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-medium-blue font-semibold">{title}</span>
          <small className="text-[13px] text-light-blue">{subtitle}</small>
        </div>
        <span className="text-[20px] font-bold text-medium-blue">
          ${amount}
        </span>
      </li>
    </Link>
  );
}
