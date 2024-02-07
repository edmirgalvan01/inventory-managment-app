import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";

export default function EditProductPage() {
  return (
    <section className="containerPage">
      <PageTitle title="Editar producto" />
      <form className="flex flex-col gap-[20px]">
        <FieldInput
          label="Nombre"
          placeholder="Color azul"
          disabled={false}
          type="text"
          onChange={() => {}}
          required
        />
        <FieldSelect
          label="Cantidad"
          disabled={false}
          onChange={() => {}}
          required
        />
        <FieldInput
          label="Cantidad"
          disabled={false}
          onChange={() => {}}
          required
          placeholder="12"
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder="43.23"
          disabled={false}
          type="number"
          onChange={() => {}}
          required
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
