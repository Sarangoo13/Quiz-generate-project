import { NextRequest, NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  const text = await req.text();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Please provide a concise summary of the following article: ${text}`,
  });

  console.log(response.candidates?.[0].content?.parts?.[0]);
  console.log(response);
  return NextResponse.json(response.candidates?.[0].content?.parts?.[0]);
};
