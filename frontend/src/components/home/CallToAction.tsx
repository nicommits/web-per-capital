import { Button } from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="rounded-2xl border border-per-accent/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            ¿Quieres saber más sobre el fondo mutual?
          </h2>
          <p className="text-slate-300 mt-2 text-sm max-w-xl">
            Contáctanos para recibir información detallada sobre el reglamento del fondo,
            comisiones, riesgos asociados y procesos de suscripción/rescate.
          </p>
        </div>
        <Button href="/contacto">Contactar a Per Capital</Button>
      </div>
    </section>
  );
}
