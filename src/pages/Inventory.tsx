import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import { useGetProducts } from "../hooks/useGetProducts";

export default function InventoryPage() {
  const { products, error, isLoading } = useGetProducts();

  return (
    <section className="containerPage">
      <PageTitle title="Inventario" />
      <PrimaryButton>
        <Link to="/new-product">Nuevo producto</Link>
      </PrimaryButton>
      <ListOfItemsWithTitle title="Productos (42)" type="product" />
    </section>
  );
}
