import { useParams } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";
import { useGetProductById } from "../hooks/useGetProductById";
import { LIST_OF_UNITIES } from "../consts";

export default function EditProductPage() {
  const { productId } = useParams();
  const fixedId = Number(productId);

  const { product } = useGetProductById(fixedId);

  return (
    <section className="containerPage">
      <PageTitle title="Editar producto" />
      <form className="flex flex-col gap-[20px]">
        <FieldInput
          label="Nombre"
          placeholder={`${product?.name}`}
          disabled={false}
          onChange={() => {}}
          required
          type="text"
        />
        <FieldSelect
          label="Unidad"
          options={LIST_OF_UNITIES}
          disabled={false}
          onChange={() => {}}
          required
        />
        <FieldInput
          label="Cantidad"
          placeholder={`${product?.quantity}`}
          disabled={false}
          onChange={() => {}}
          required
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder={`$${product?.price}`}
          disabled={false}
          onChange={() => {}}
          required
          type="number"
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
