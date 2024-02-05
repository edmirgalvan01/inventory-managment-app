import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

export default function WelcomePage() {
  return (
    <section className="containerPage justify-center items-center">
      <PrimaryButton>
        <Link to="/inventory">Inventario</Link>
      </PrimaryButton>
      <SecondaryButton>
        <Link to="/sales">Ventas</Link>
      </SecondaryButton>
    </section>
  );
}
