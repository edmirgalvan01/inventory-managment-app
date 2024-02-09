import { Link, useParams } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";
import { useGetSaleById } from "../hooks/useGetSaleById";
import { useDeleteSale } from "../hooks/useDeleteSale";
import { Toaster } from "sonner";

export default function SalePage() {
  const { saleId } = useParams();
  const fixedSale = Number(saleId);

  const { sale, isLoading } = useGetSaleById(fixedSale);
  const { error: deleteError, removeSale } = useDeleteSale();

  return (
    <section className="containerPage">
      <PageTitle title="Venta" />
      {!isLoading ? (
        <>
          <ItemData title="Producto" text={sale!.products.name} />
          <ItemData title="Fecha" text={sale!.date} />
          <ItemData
            title="Cantidad"
            text={`${sale?.quantity}${sale?.products.unity}`}
          />
          <ItemData title="Total" text={`$${sale?.total}`} />

          <div className="flex flex-col gap-[10px]">
            <PrimaryButton>
              <Link to={`/edit-sale/${sale?.id}`}>Editar</Link>
            </PrimaryButton>
            <SecondaryButton onClick={() => removeSale(sale!.id)}>
              Borrar
            </SecondaryButton>
            {deleteError && (
              <p className="text-red-500 font-semibold">
                {deleteError.message}
              </p>
            )}
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <Toaster richColors />
    </section>
  );
}
