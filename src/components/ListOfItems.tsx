import ItemCard from "./ItemCard";

interface Props {
  type: "product" | "sale";
}

export default function ListOfItems({ type }: Props) {
  return (
    <ul className="listOfItems flex flex-col gap-[10px]">
      <ItemCard
        type={type}
        title="Color Azul"
        subtitle="16/05/2023"
        amount={43.32}
      />
      <ItemCard
        type={type}
        title="Color Azul"
        subtitle="16/05/2023"
        amount={43.32}
      />
      <ItemCard
        type={type}
        title="Color Azul"
        subtitle="16/05/2023"
        amount={43.32}
      />
    </ul>
  );
}
