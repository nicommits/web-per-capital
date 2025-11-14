import ReporteCard from "@/components/reportes/ReporteCard";

const dummyReportes = [
  { id: 1, titulo: "Reporte Trimestral Q1 2025", fecha: "2025-03-31" },
  { id: 2, titulo: "Reporte Trimestral Q4 2024", fecha: "2024-12-31" },
];

export default function ReportesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-white">
          Reportes Per Capital
        </h1>
        <p className="text-slate-300 mt-2">
          Accede a los reportes periódicos emitidos por Per Capital.
        </p>
      </header>

      <div className="grid gap-4">
        {dummyReportes.map((r) => (
          <ReporteCard key={r.id} reporte={r} />
        ))}
      </div>
    </section>
  );
}
