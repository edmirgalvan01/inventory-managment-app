import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import { useGetProducts } from "../hooks/useGetProducts";
import PageTitle from "../components/PageTitle";
import { useInsertSale } from "../hooks/useInsertSale";

export default function NewSalePage() {
  const { products, isLoading } = useGetProducts();
  const { updateSale: handleChange, saveSale } = useInsertSale();

  const mappedOptions = products?.map((product) => {
    return {
      value: product.id.toString(),
      label: product.name,
    };
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    saveSale()
      .then(({ data, error }) => {
        // Si no hay error, mostrar una notificacion de ✅
        // y ridirigir a Sales
      })
      .finally(() => {});
  };

  return (
    <section className="containerPage">
      <PageTitle title="Nueva venta" />
      <>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            <FieldSelect
              options={mappedOptions}
              label="Producto"
              disabled={false}
              onChange={(e) => handleChange("product_id", e.target.value)}
              required
            />
            <FieldInput
              label="Cantidad"
              placeholder="14"
              disabled={false}
              type="text"
              onChange={(e) => handleChange("quantity", e.target.value)}
              required
            />
            <FieldInput
              label="Fecha"
              disabled={false}
              onChange={(e) => handleChange("date", e.target.value)}
              required
              placeholder="12/02/2024"
              type="date"
            />
            <FieldInput
              label="Total"
              disabled={false}
              onChange={(e) => handleChange("total", e.target.value)}
              required
              placeholder="$345.32"
              type="number"
            />
            <PrimaryButton>Guardar venta</PrimaryButton>
          </form>
        )}
      </>
    </section>
  );
}
