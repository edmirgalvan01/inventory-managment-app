import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { NoDataIcon } from "../components/Icons";

export default function NotFoundPage() {
  return (
    <div className="containerPage items-center justify-center">
      <NoDataIcon />
      <h1 className="text-xl text-error-red font-bold font-inter text-center">
        Hubo un error
      </h1>
      <p className="font-semibold font-nunito text-center">
        La pagina que has solicitado no se ha encontrado
      </p>
      <PrimaryButton>
        <Link to="/">Volver al inicio</Link>
      </PrimaryButton>
    </div>
  );
}
