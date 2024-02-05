import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";

export default function SalesPage() {
  return (
    <section className="salesPage flex flex-col gap-[20px]">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <a href="/new-sale">Nueva venta</a>
      </PrimaryButton>
      <ListOfItemsWithTitle title="Ventas (16)" type="sale" />
    </section>
  );
}
