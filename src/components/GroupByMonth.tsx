import { IconCaretDownFilled, IconCaretRightFilled } from "@tabler/icons-react";
import ListOfItemsWithTitle from "./ListOfItemsWithTitle";
import { MONTHS_RANGE } from "../consts";
import { useGetSalesByMonth } from "../hooks/useGetSalesByMonth";
import { getMonthName, getTotalSales } from "../utils";
import { useOpenedGroupToggle } from "../hooks/useOpenedGroupToggle";

export function GroupByMonth({
  monthNumber,
}: {
  monthNumber: keyof typeof MONTHS_RANGE;
}) {
  const { sales, error, isLoading } = useGetSalesByMonth(monthNumber);
  const totalSales = sales?.length;
  const monthName = getMonthName(monthNumber);

  const { opened, setOpened } = useOpenedGroupToggle(sales.length > 0);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center justify-between"
        onClick={() => setOpened(!opened)}
      >
        <h1 className="text-xl font-bold font-inter text-medium-blue">
          {monthName}
        </h1>
        {opened ? (
          <IconCaretDownFilled size={25} className="text-medium-blue" />
        ) : (
          <IconCaretRightFilled size={25} className="text-medium-blue" />
        )}
      </div>
      {opened && (
        <div className="flex flex-col gap-2 px-1">
          <ListOfItemsWithTitle
            isLoading={isLoading}
            title={`Ventas (${totalSales})`}
            type="sale"
            list={sales!}
            error={error}
          />
          <p className="text-end font-medium font-inter text-medium-blue">
            Total vendido:{" "}
            <span className="font-bold">${getTotalSales(sales)}</span>
          </p>
        </div>
      )}
    </div>
  );
}
