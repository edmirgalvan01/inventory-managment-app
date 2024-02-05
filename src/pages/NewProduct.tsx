import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";

export default function NewProductPage() {
  return (
    <section className="flex flex-col gap-[20px]">
      <PageTitle title="Nuevo producto" />
      <form className="flex flex-col gap-[20px]">
        <FieldInput
          label="Nombre"
          placeholder="Color azul"
          disabled={false}
          type="text"
          handleClick={() => {}}
        />
        <FieldSelect label="Cantidad" disabled={false} handleClick={() => {}} />
        <FieldInput
          label="Cantidad"
          disabled={false}
          handleClick={() => {}}
          placeholder="12"
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder="43.23"
          disabled={false}
          type="number"
          handleClick={() => {}}
        />
        <button>Guardar producto</button>
      </form>
    </section>
  );
}
