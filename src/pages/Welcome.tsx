export default function WelcomePage() {
  return (
    <section className="welcomePage min-h-[100dvh] flex flex-col justify-center items-center gap-[20px]">
      <button>
        <a href="/inventory">Inventario</a>
      </button>
      <button>
        <a href="/sales">Ventas</a>
      </button>
    </section>
  );
}
