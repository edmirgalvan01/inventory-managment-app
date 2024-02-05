import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";

export default function ProductPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Nombre del producto" />
      <ItemData title="Nombre" text="Color Azul" />
      <ItemData title="Cantidad" text="22 unidades" />
      <ItemData title="Precio" text="$34.78" />
      <ItemData title="Unidad" text="Lts" />
      <ItemData title="Ventas" text="54 ventas" />

      <div className="flex flex-col gap-[10px]">
        <PrimaryButton>
          <Link to="/edit-product/12">Editar</Link>
        </PrimaryButton>
        <SecondaryButton>Borrar</SecondaryButton>
      </div>
    </section>
  );
}
