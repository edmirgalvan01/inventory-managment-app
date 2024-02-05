import { PrimaryButton, SecondaryButton } from "../components/Buttons";

export default function WelcomePage() {
  return (
    <section className="containerPage justify-center items-center">
      <PrimaryButton>
        <a href="/inventory">Inventario</a>
      </PrimaryButton>
      <SecondaryButton>
        <a href="/sales">Ventas</a>
      </SecondaryButton>
    </section>
  );
}
