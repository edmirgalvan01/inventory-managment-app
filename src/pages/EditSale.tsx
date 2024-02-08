import { Toaster } from "sonner";
import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import PageTitle from "../components/PageTitle";
import { useUpdateSale } from "../hooks/useUpdateSale";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../hooks/useGetProducts";

export default function EditSalePage() {
  const { saleId } = useParams();
  const fixedId = Number(saleId);

  const { products, isLoading } = useGetProducts();
  const {
    newSale,
    updateNewSale: handleChange,
    saveNewSale,
  } = useUpdateSale(fixedId);

  const mappedOptions = products?.map((product) => {
    return {
      value: product.id.toString(),
      label: product.name,
    };
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    saveNewSale();
  };

  return (
    <section className="containerPage">
      <PageTitle title="Editar venta" />
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <FieldSelect
            label="Producto"
            onChange={(e) => handleChange("product_id", e.target.value)}
            required
            value={newSale?.product_id}
            options={mappedOptions}
          />
          <FieldInput
            label="Cantidad"
            placeholder={`${newSale?.quantity}`}
            type="number"
            onChange={(e) => handleChange("quantity", e.target.value)}
            required
            value={newSale?.quantity}
          />
          <FieldInput
            label="Total"
            onChange={(e) => handleChange("total", e.target.value)}
            required
            placeholder={`${newSale?.total}`}
            type="number"
            value={newSale?.total}
          />
          <FieldInput
            label="Fecha"
            onChange={(e) => handleChange("date", e.target.value)}
            required
            placeholder={`${newSale?.date}`}
            type="date"
            value={newSale?.date}
          />
          <PrimaryButton>Guardar venta</PrimaryButton>
        </form>
      )}
      <Toaster richColors />
    </section>
  );
}
