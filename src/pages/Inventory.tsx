import { PrimaryButton, SecondaryButton } from "../components/Buttons";
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
      {isLoading ? (
        <p className="text-medium-blue font-semibold">Cargando...</p>
      ) : error ? (
        <>
          <h2 className="text-error-red font-bold text-lg">{error.code}</h2>
          <p className="text-error-red font-semibold">{error.message}</p>
          <SecondaryButton>
            <Link to="/">Intentalo mas tarde</Link>
          </SecondaryButton>
        </>
      ) : (
        <ListOfItemsWithTitle
          title="Productos (42)"
          type="product"
          list={products!}
        />
      )}
    </section>
  );
}
