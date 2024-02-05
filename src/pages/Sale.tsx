import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";

export default function SalePage() {
  return (
    <section className="containerPage">
      <PageTitle title="Venta" />
      <ItemData title="Producto" text="Nombre del producto" />
      <ItemData title="Cantidad" text="Cantidad de la venta" />
      <ItemData title="Total" text="Total vendido" />

      <div className="flex flex-col gap-[10px]">
        <PrimaryButton>
          <Link to="/edit-sale/12">Editar</Link>
        </PrimaryButton>
        <SecondaryButton>Borrar</SecondaryButton>
      </div>
    </section>
  );
}
