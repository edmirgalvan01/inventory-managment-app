import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import ListOfItemsWithTitle from "../components/ListOfItemsWithTitle";
import PageTitle from "../components/PageTitle";

export default function SalesPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <Link to="/new-sale">Nueva venta</Link>
      </PrimaryButton>
      <ListOfItemsWithTitle title="Ventas (16)" type="sale" list={[]} />
    </section>
  );
}
