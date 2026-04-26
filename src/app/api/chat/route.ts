import { NextRequest, NextResponse } from "next/server";
import { generateFactoricResponse, BOSTier } from "@/utils/ai";

export async function POST(req: NextRequest) {
  try {
    const { message, tier } = await req.json();
    const response = await generateFactoricResponse(message, tier as BOSTier);
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: "Internal Structural Error" }, { status: 500 });
  }
}
