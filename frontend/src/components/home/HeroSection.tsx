import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Soluciones de inversión con visión de{" "}
          <span className="text-per-accent">largo plazo</span>.
        </h1>
        <p className="text-slate-300">
          Per Capital es una casa de bolsa enfocada en ofrecer vehículos de inversión
          transparentes, eficientes y alineados con los objetivos de nuestros clientes.
        </p>
        <div className="flex gap-4">
          <Button href="/fondos">Ver fondo mutual</Button>
          <Button variant="ghost" href="/reportes">
            Ver reportes
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
        <p className="text-sm text-slate-400 mb-4">
          Resumen del fondo mutual de capital abierto
        </p>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-400">Valor cuota (ref.)</dt>
            <dd className="text-white font-medium">$ 100,25</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-400">Rentabilidad 12M</dt>
            <dd className="text-emerald-400 font-medium">+ 9,8 %</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-400">Volatilidad 12M</dt>
            <dd className="text-slate-200">4,2 %</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-slate-500">
          *Datos ilustrativos. Aquí luego conectaremos el API real.
        </p>
      </div>
    </section>
  );
}
