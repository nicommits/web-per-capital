export default function ServiciosSection() {
  const servicios = [
    {
      titulo: "Fondo mutual de capital abierto",
      desc: "Vehículo diversificado administrado por Per Capital con enfoque de largo plazo.",
    },
    {
      titulo: "Asesoría de inversión",
      desc: "Acompañamiento profesional para definir y ejecutar una estrategia alineada con tus objetivos.",
    },
    {
      titulo: "Reportes y balances",
      desc: "Información financiera clara y periódica para facilitar la toma de decisiones.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-2xl font-semibold text-white">Qué ofrece Per Capital</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <article
            key={s.titulo}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <h3 className="font-medium text-white mb-2">{s.titulo}</h3>
            <p className="text-sm text-slate-300">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
