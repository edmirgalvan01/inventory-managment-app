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
        <button>
          <a href="/edit-product">Editar</a>
        </button>
        <button>
          <a href="/">Borrar</a>
        </button>
      </div>
    </section>
  );
}
