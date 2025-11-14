import FondoResumenCard from "@/components/fondos/FondoResumenCard";
import FondoDetalleStats from "@/components/fondos/FondoDetalleStats";

export default function FondosPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold text-white">
          Fondo mutual de capital abierto
        </h1>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Información del fondo mutual de capital abierto administrado por Per
          Capital: desempeño, rentabilidades históricas y condiciones clave.
        </p>
      </header>

      <FondoResumenCard />
      <FondoDetalleStats />
    </section>
  );
}
