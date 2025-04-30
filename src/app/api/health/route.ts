import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Здесь можно добавить проверки состояния приложения
    // Например, проверку подключения к базе данных или внешним API

    return NextResponse.json(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        version: process.env.APP_VERSION || "1.0.0",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Health check failed:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Health check failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}