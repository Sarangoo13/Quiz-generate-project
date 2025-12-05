import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

type article = {
  id: string;
  question: string;
  options: string;
  answer: string;
  articleId: string;
  article: string;
};

export const POST = async (req: NextRequest) => {
  const summery = await req.text();
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate 5 multiple choice questions based on this article: ${summery}. Return the response in this exact JSON format:
      [
        {
          "question": "Question text here",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "answer": "0"
        }
      ]
      Make sure the response is valid JSON and the answer is the index (0-3) of the correct option.`,
  });

  console.log(response.candidates?.[0].content?.parts?.[0]);
  console.log(response);

  return NextResponse.json(response.candidates?.[0].content?.parts?.[0]);
};
