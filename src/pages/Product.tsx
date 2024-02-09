import { Link, useParams } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ItemData from "../components/ItemData";
import PageTitle from "../components/PageTitle";
import { useGetProductById } from "../hooks/useGetProductById";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { Toaster } from "sonner";

export default function ProductPage() {
  const { productId } = useParams();
  const fixedId = Number(productId);

  const { product, error, isLoading } = useGetProductById(fixedId);
  const { error: deleteError, removeProduct } = useDeleteProduct();

  return (
    <section className="containerPage">
      {isLoading ? (
        <p>Cargando...</p>
      ) : product ? (
        <>
          <PageTitle title="Nombre del producto" />
          <ItemData title="Nombre" text={product.name} />
          <ItemData
            title="Cantidad"
            text={`${product.quantity} ${product.unity}`}
          />
          <ItemData title="Precio" text={`$${product.price}`} />
          <ItemData title="Unidad" text={product.unity} />

          <div className="flex flex-col gap-[10px]">
            <PrimaryButton>
              <Link to={`/edit-product/${product.id}`}>Editar</Link>
            </PrimaryButton>
            <SecondaryButton onClick={() => removeProduct(product.id)}>
              Borrar
            </SecondaryButton>
            {deleteError && (
              <span className="text-red-500 font-semibold">
                {deleteError.message}
              </span>
            )}
          </div>
        </>
      ) : (
        <p>{error?.message}</p>
      )}
      <Toaster richColors />
    </section>
  );
}
