import { IconCaretDownFilled } from "@tabler/icons-react";
import ListOfItemsWithTitle from "./ListOfItemsWithTitle";
import { MONTHS_RANGE } from "../consts";
import { useGetSalesByMonth } from "../hooks/useGetSalesByMonth";
import { getMonthName } from "../utils";

export function GroupByMonth({
  monthNumber,
}: {
  monthNumber: keyof typeof MONTHS_RANGE;
}) {
  const { sales, error, isLoading } = useGetSalesByMonth(monthNumber);
  const totalSales = sales?.length;
  const monthName = getMonthName(monthNumber);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold font-inter text-medium-blue">
          {monthName}
        </h1>
        <IconCaretDownFilled size={25} className="text-medium-blue" />
      </div>
      <ListOfItemsWithTitle
        isLoading={isLoading}
        title={`Ventas (${totalSales})`}
        type="sale"
        list={sales!}
        error={error}
      />
    </div>
  );
}
