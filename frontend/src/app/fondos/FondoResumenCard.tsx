export default function FondoResumenCard() {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
      <h2 className="text-xl font-semibold text-white">
        Resumen del fondo mutual
      </h2>
      <p className="text-sm text-slate-300">
        Fondo mutual de capital abierto administrado por Per Capital, orientado
        a inversionistas que buscan crecimiento de capital en el mediano y largo plazo.
      </p>
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <dt className="text-slate-400">Valor cuota (ref.)</dt>
          <dd className="text-white font-medium">$ 100,25</dd>
        </div>
        <div>
          <dt className="text-slate-400">Rent. 12M</dt>
          <dd className="text-emerald-400 font-medium">+ 9,8 %</dd>
        </div>
        <div>
          <dt className="text-slate-400">Moneda</dt>
          <dd className="text-white font-medium">USD</dd>
        </div>
        <div>
          <dt className="text-slate-400">Horizonte</dt>
          <dd className="text-white font-medium">Mediano / largo plazo</dd>
        </div>
      </dl>
      <p className="text-xs text-slate-500">
        *Valores referenciales de ejemplo. Luego conectaremos los datos reales obtenidos vía API / scraping.
      </p>
    </article>
  );
}
