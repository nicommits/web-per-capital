export type FondoMutual = {
  id: string;
  nombre: string;
  valorCuota: number;
  moneda: string;
  rentabilidad12m: number;
  volatilidad12m?: number;
};

export type Reporte = {
  id: string;
  titulo: string;
  fecha: string;
  urlPdf?: string;
};

export type Balance = {
  periodo: string;
  activos: number;
  pasivos: number;
  patrimonio: number;
};
