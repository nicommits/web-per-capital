import type { FondoMutual, Reporte, Balance } from "./types";

const DATA_API_URL = process.env.NEXT_PUBLIC_DATA_API_URL;

if (!DATA_API_URL) {
  console.warn("Falta NEXT_PUBLIC_DATA_API_URL en .env.local");
}

async function fetchJson<T>(path: string): Promise<T> {
  const url = `${DATA_API_URL}${path}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR: 60s, ajustable
  });

  if (!res.ok) {
    throw new Error(`Error al llamar ${url}: ${res.status}`);
  }

  return res.json();
}

export async function getFondoMutual(): Promise<FondoMutual> {
  return fetchJson<FondoMutual>("/fondos/per-capital");
}

export async function getReportes(): Promise<Reporte[]> {
  return fetchJson<Reporte[]>("/reportes");
}

export async function getBalances(): Promise<Balance[]> {
  return fetchJson<Balance[]>("/balances");
}
