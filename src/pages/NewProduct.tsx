import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import PageTitle from "../components/PageTitle";
import { PrimaryButton } from "../components/Buttons";
import { useInsertProduct } from "../hooks/useInsertProduct";
import { FieldInput, FieldSelect } from "../components/FieldInput";

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
      if (!response.error) {
        toast.success("Producto agregado correctamente.");
        setTimeout(() => navigate("/inventory"), 2000);
      }
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
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
        <FieldSelect
          label="Unidad"
          disabled={false}
          onChange={(e) => handleChange("unity", e.target.value)}
          required
        />
        <FieldInput
          label="Cantidad"
          disabled={false}
          onChange={(e) => handleChange("quantity", e.target.value)}
          required
          placeholder="12"
          type="number"
        />
        <FieldInput
          label="Precio unitario"
          placeholder="43.23"
          disabled={false}
          type="number"
          onChange={(e) => handleChange("price", e.target.value)}
          required
        />
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
      <Toaster richColors />
    </section>
  );
}
