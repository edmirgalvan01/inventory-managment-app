import { useParams } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";
import { LIST_OF_UNITIES } from "../consts";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

export default function EditProductPage() {
  const { productId } = useParams();
  const fixedId = Number(productId);

  const {
    newProduct,
    updateNewProduct: handleChange,
    saveNewProduct,
  } = useUpdateProduct(fixedId);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    saveNewProduct();
  };

  return (
    <section className="containerPage">
      <PageTitle title="Editar producto" />
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <FieldInput
          label="Nombre"
          placeholder={`${newProduct?.name}`}
          disabled={false}
          onChange={(e) => handleChange("name", e.target.value)}
          required
          type="text"
          value={newProduct?.name}
        />
        <FieldSelect
          label="Unidad"
          options={LIST_OF_UNITIES}
          disabled={false}
          onChange={(e) => handleChange("unity", e.target.value)}
          required
          value={newProduct?.unity}
        />
        <FieldInput
          label="Cantidad"
          placeholder={`${newProduct?.quantity}`}
          disabled={false}
          onChange={(e) => handleChange("quantity", e.target.value)}
          required
          type="number"
          value={newProduct?.quantity}
        />
        <FieldInput
          label="Precio unitario"
          placeholder={`$${newProduct?.price}`}
          disabled={false}
          onChange={(e) => handleChange("price", e.target.value)}
          required
          type="number"
          value={newProduct?.price}
          step="0.01"
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
