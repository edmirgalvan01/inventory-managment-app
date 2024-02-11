import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";
import { useGetSales } from "../hooks/useGetSales";

export default function SalesPage() {
  const { sales, error, isLoading } = useGetSales();
  const totalSales = sales?.length;

  return (
    <section className="containerPage">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <Link to="/new-sale">Nueva venta</Link>
      </PrimaryButton>
      {!isLoading ? (
        <ListOfItemsWithTitle
          isLoading={isLoading}
          title={`Ventas (${totalSales})`}
          type="sale"
          list={sales!}
        />
      ) : (
        <p>{error?.message}</p>
      )}
    </section>
  );
}
