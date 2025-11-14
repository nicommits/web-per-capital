const dummyBalances = [
  { periodo: "2024 Q4", activos: "1.200.000", pasivos: "450.000", patrimonio: "750.000" },
  { periodo: "2024 Q3", activos: "1.150.000", pasivos: "440.000", patrimonio: "710.000" },
];

export default function BalanceTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-900">
          <tr className="text-slate-300 text-left">
            <th className="px-4 py-2">Periodo</th>
            <th className="px-4 py-2">Activos</th>
            <th className="px-4 py-2">Pasivos</th>
            <th className="px-4 py-2">Patrimonio</th>
          </tr>
        </thead>
        <tbody>
          {dummyBalances.map((b) => (
            <tr key={b.periodo} className="border-t border-slate-800">
              <td className="px-4 py-2 text-white">{b.periodo}</td>
              <td className="px-4 py-2 text-slate-200">{b.activos}</td>
              <td className="px-4 py-2 text-slate-200">{b.pasivos}</td>
              <td className="px-4 py-2 text-slate-200">{b.patrimonio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-500 px-4 py-3">
        *Cifras ilustrativas. Aquí luego se mostrarán los balances reales.
      </p>
    </div>
  );
}
