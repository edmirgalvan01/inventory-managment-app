import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";

export default function NewSalePage() {
  return (
    <section className="containerPage">
      <PageTitle title="Nueva venta" />
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
        <PrimaryButton>Guardar venta</PrimaryButton>
      </form>
    </section>
  );
}
