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
          placeholder={`${newProduct?.newName}`}
          disabled={false}
          onChange={(e) => handleChange("newName", e.target.value)}
          required
          type="text"
          value={newProduct.newName}
        />
        <FieldSelect
          label="Unidad"
          options={LIST_OF_UNITIES}
          disabled={false}
          onChange={(e) => handleChange("newUnity", e.target.value)}
          required
          value={newProduct.newUnity}
        />
        <FieldInput
          label="Cantidad"
          placeholder={`${newProduct?.newQuantity}`}
          disabled={false}
          onChange={(e) => handleChange("newQuantity", e.target.value)}
          required
          type="number"
          value={newProduct.newQuantity}
        />
        <FieldInput
          label="Precio unitario"
          placeholder={`$${newProduct?.newPrice}`}
          disabled={false}
          onChange={(e) => handleChange("newPrice", e.target.value)}
          required
          type="number"
          value={newProduct.newPrice}
          step="0.01"
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
