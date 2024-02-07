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
          handleChange={() => {}}
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
          handleChange={() => {}}
          required
          placeholder="12"
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder="43.23"
          disabled={false}
          type="number"
          handleChange={() => {}}
          required
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
