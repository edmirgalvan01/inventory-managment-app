import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";

export default function SalePage() {
  return (
    <section className="salePage flex flex-col gap-[20px]">
      <PageTitle title="Venta" />
      <ItemData title="Producto" text="Nombre del producto" />
      <ItemData title="Cantidad" text="Cantidad de la venta" />
      <ItemData title="Total" text="Total vendido" />

      <div className="flex flex-col gap-[10px]">
        <PrimaryButton>
          <a href="/edit-sale/098">Editar</a>
        </PrimaryButton>
        <SecondaryButton>
          <a href="/">Borrar</a>
        </SecondaryButton>
      </div>
    </section>
  );
}
