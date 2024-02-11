import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import { useGetProducts } from "../hooks/useGetProducts";

export default function InventoryPage() {
  const { products, error, isLoading } = useGetProducts();
  const totalProducts = products?.length;

  return (
    <section className="containerPage">
      <PageTitle title="Inventario" />
      <PrimaryButton>
        <Link to="/new-product">Nuevo producto</Link>
      </PrimaryButton>
      {error ? (
        <>
          <h2 className="text-error-red font-bold text-lg">{error.code}</h2>
          <p className="text-error-red font-semibold">{error.message}</p>
          <SecondaryButton>
            <Link to="/">Intentalo mas tarde</Link>
          </SecondaryButton>
        </>
      ) : (
        <ListOfItemsWithTitle
          isLoading={isLoading}
          title={`Productos (${totalProducts})`}
          type="product"
          list={products!}
        />
      )}
    </section>
  );
}
