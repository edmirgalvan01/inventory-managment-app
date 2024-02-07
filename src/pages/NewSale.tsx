import { PrimaryButton } from "../components/Buttons";
import { FieldInput, FieldSelect } from "../components/FieldInput";
import { useGetProducts } from "../hooks/useGetProducts";
import PageTitle from "../components/PageTitle";

export default function NewSalePage() {
  const { products, isLoading } = useGetProducts();
  const mappedOptions = products?.map((product) => {
    return {
      value: product.id,
      label: product.name,
    };
  });

  return (
    <section className="containerPage">
      <PageTitle title="Nueva venta" />
      <>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <form className="flex flex-col gap-[20px]">
            <FieldSelect
              options={mappedOptions}
              label="Producto"
              disabled={false}
              handleChange={() => {}}
              required
            />
            <FieldInput
              label="Cantidad"
              placeholder="14"
              disabled={false}
              type="text"
              handleChange={() => {}}
              required
            />
            <FieldInput
              label="Fecha"
              disabled={false}
              handleChange={() => {}}
              required
              placeholder="12/02/2024"
              type="date"
            />
            <PrimaryButton>Guardar venta</PrimaryButton>
          </form>
        )}
      </>
    </section>
  );
}
