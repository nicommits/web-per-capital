import BalanceTable from "@/components/balances/BalanceTable";

export default function BalancesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-white">
          Balances Financieros
        </h1>
        <p className="text-slate-300 mt-2">
          Balances financieros resumidos de Per Capital para consulta pública.
        </p>
      </header>

      <BalanceTable />
    </section>
  );
}
