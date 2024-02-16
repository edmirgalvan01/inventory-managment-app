import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import PageTitle from "../components/PageTitle";
import { GroupByMonth } from "../components/GroupByMonth";

export default function SalesPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <Link to="/new-sale">Nueva venta</Link>
      </PrimaryButton>
      <GroupByMonth monthNumber={1} />
    </section>
  );
}
