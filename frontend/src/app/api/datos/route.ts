import { NextResponse } from "next/server";
import { getFondoMutual } from "@/lib/api-client";

export async function GET() {
  try {
    const data = await getFondoMutual();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en /api/datos:", error);
    return NextResponse.json(
      { error: "No se pudieron obtener los datos" },
      { status: 500 }
    );
  }
}
