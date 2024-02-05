import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";

export default function ProductPage() {
  return (
    <section className="productPage flex flex-col gap-[20px]">
      <PageTitle title="Nombre del producto" />
      <ItemData title="Nombre" text="Color Azul" />
      <ItemData title="Cantidad" text="22 unidades" />
      <ItemData title="Precio" text="$34.78" />
      <ItemData title="Unidad" text="Lts" />
      <ItemData title="Ventas" text="54 ventas" />

      <div className="flex flex-col gap-[10px]">
        <PrimaryButton>
          <a href="/edit-product">Editar</a>
        </PrimaryButton>
        <SecondaryButton>
          <a href="/">Borrar</a>
        </SecondaryButton>
      </div>
    </section>
  );
}
