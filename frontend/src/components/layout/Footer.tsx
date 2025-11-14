export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Per Capital Casa de Bolsa. Todos los derechos reservados.</p>
        <p className="text-xs md:text-sm">
          Información referencial. No constituye recomendación de inversión.
        </p>
      </div>
    </footer>
  );
}
