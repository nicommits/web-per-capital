export default function FondoDetalleStats() {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
      <h2 className="text-lg font-semibold text-white">
        Detalle de condiciones y riesgos
      </h2>
      <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
        <li>Política de inversión orientada a instrumentos de renta variable y fija.</li>
        <li>Posible fluctuación del valor cuota según condiciones de mercado.</li>
        <li>El rendimiento pasado no garantiza resultados futuros.</li>
        <li>Recomendable revisar el reglamento interno y el prospecto informativo.</li>
      </ul>
    </article>
  );
}
