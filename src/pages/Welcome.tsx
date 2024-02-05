import { PrimaryButton, SecondaryButton } from "../components/Buttons";

export default function WelcomePage() {
  return (
    <section className="welcomePage min-h-[100dvh] flex flex-col justify-center items-center gap-[20px]">
      <PrimaryButton>
        <a href="/inventory">Inventario</a>
      </PrimaryButton>
      <SecondaryButton>
        <a href="/sales">Ventas</a>
      </SecondaryButton>
    </section>
  );
}
