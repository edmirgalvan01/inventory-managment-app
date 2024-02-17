import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import PageTitle from "../components/PageTitle";
import { GroupByMonth } from "../components/GroupByMonth";
import { LIST_OF_MONTHS, MONTHS_RANGE } from "../consts";

export default function SalesPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Ventas" />
      <PrimaryButton>
        <Link to="/new-sale" className="w-full">
          Nueva venta
        </Link>
      </PrimaryButton>
      {LIST_OF_MONTHS.map((month) => (
        <GroupByMonth monthNumber={month.number as keyof typeof MONTHS_RANGE} />
      ))}
    </section>
  );
}
