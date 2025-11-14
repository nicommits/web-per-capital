type Reporte = {
  id: number | string;
  titulo: string;
  fecha: string;
};

export default function ReporteCard({ reporte }: { reporte: Reporte }) {
  const fecha = new Date(reporte.fecha).toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex items-center justify-between">
      <div>
        <h2 className="text-sm md:text-base font-medium text-white">
          {reporte.titulo}
        </h2>
        <p className="text-xs text-slate-400 mt-1">Fecha: {fecha}</p>
      </div>
      <button className="text-xs md:text-sm text-per-accent hover:text-per-accentSoft">
        Descargar PDF
      </button>
    </article>
  );
}
