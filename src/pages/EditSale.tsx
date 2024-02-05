import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";

export default function EditSalePage() {
  return (
    <section className="flex flex-col gap-[20px]">
      <PageTitle title="Editar venta" />
      <form className="flex flex-col gap-[20px]">
        <FieldSelect label="Producto" disabled={false} handleClick={() => {}} />
        <FieldInput
          label="Cantidad"
          placeholder="14"
          disabled={false}
          type="text"
          handleClick={() => {}}
        />
        <FieldInput
          label="Fecha"
          disabled={false}
          handleClick={() => {}}
          placeholder="12/02/2024"
          type="date"
        />
        <button>Guardar venta</button>
      </form>
    </section>
  );
}
