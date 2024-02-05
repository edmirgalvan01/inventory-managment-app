import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";

export default function InventoryPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Inventario" />
      <PrimaryButton>
        <a href="/new-product">Nuevo producto</a>
      </PrimaryButton>
      <ListOfItemsWithTitle title="Productos (42)" type="product" />
    </section>
  );
}
