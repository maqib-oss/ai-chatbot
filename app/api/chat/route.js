import { NextResponse } from "next/server";
import { geminiClient } from "@/lib/gemini";

export async function POST(req) {
  const { messages } = await req.json();
  const contents = messages.map((m) => ({ role: m.role, content: m.content }));

  try {
    const res = await geminiClient.generateContent({
      model: "gemini-2.5-pro",
      contents,
    });
    const reply = res.text;
    return NextResponse.json({ reply });
  } catch (e) {
    console.error("Gemini error:", e);
    return NextResponse.json({ error: "AI error" }, { status: 500 });
  }
}
