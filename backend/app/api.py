from fastapi import APIRouter
from datetime import date

router = APIRouter()

@router.get("/fondos/per-capital")
def get_fondo_per_capital():
    # Ejemplo HARDCODEADO: aquí luego pones tu scraping / API real
    return {
        "id": "fondo-per-capital",
        "nombre": "Fondo mutual de capital abierto Per Capital",
        "valorCuota": 100.25,
        "moneda": "USD",
        "rentabilidad12m": 0.098,
        "volatilidad12m": 0.042,
    }

@router.get("/reportes")
def get_reportes():
    return [
        {
            "id": "2025-q1",
            "titulo": "Reporte Trimestral Q1 2025",
            "fecha": str(date(2025, 3, 31)),
            "urlPdf": "https://example.com/reportes/2025-q1.pdf",
        },
        {
            "id": "2024-q4",
            "titulo": "Reporte Trimestral Q4 2024",
            "fecha": str(date(2024, 12, 31)),
            "urlPdf": "https://example.com/reportes/2024-q4.pdf",
        },
    ]

@router.get("/balances")
def get_balances():
    return [
        {
            "periodo": "2024 Q4",
            "activos": 1200000,
            "pasivos": 450000,
            "patrimonio": 750000,
        },
        {
            "periodo": "2024 Q3",
            "activos": 1150000,
            "pasivos": 440000,
            "patrimonio": 710000,
        },
    ]
