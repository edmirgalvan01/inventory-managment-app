import ListOfItems from "./ListOfItems";

interface Props {
  title: string;
  type: "product" | "sale";
}

export default function ListOfItemsWithTitle({ title, type }: Props) {
  return (
    <section className="listOfItemsWithTitle flex flex-col gap-[10px]">
      <h2 className="text-medium-blue font-semibold">{title}</h2>
      <ListOfItems type={type} />
    </section>
  );
}
