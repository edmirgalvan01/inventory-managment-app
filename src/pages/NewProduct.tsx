import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";
import { useInsertProduct } from "../hooks/useInsertProduct";

export default function NewProductPage() {
  const navigate = useNavigate();
  const {
    product,
    updateProduct: handleChange,
    saveProduct,
  } = useInsertProduct();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    saveProduct(product).then((response) => {
      if (!response.error) navigate("/inventory");
    });
  };

  return (
    <section className="containerPage">
      <PageTitle title="Nuevo producto" />
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <FieldInput
          label="Nombre"
          placeholder="Color azul"
          disabled={false}
          type="text"
          handleChange={(e) => handleChange("name", e.target.value)}
          required
        />
        <FieldSelect
          label="Unidad"
          disabled={false}
          handleChange={(e) => handleChange("unity", e.target.value)}
          required
        />
        <FieldInput
          label="Cantidad"
          disabled={false}
          handleChange={(e) => handleChange("quantity", e.target.value)}
          required
          placeholder="12"
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder="43.23"
          disabled={false}
          type="number"
          handleChange={(e) => handleChange("price", e.target.value)}
          required
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
