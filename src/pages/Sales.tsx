import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";
import { useGetSales } from "../hooks/useGetSales";

export default function SalesPage() {
  const { sales, error, isLoading } = useGetSales();

  return (
    <section className="containerPage">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <Link to="/new-sale">Nueva venta</Link>
      </PrimaryButton>
      {!isLoading ? (
        <ListOfItemsWithTitle title="Ventas (16)" type="sale" list={sales!} />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
}
