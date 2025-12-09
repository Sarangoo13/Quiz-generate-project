import { NextRequest, NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";
import { json } from "stream/consumers";
const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  const text = await req.text();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Please provide a concise summary of the following article: ${text}`,
  });

  const quiz = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate 5 multiple choice questions based on this article: ${response.text}. Return the response in this exact JSON format:
      [
        {
          "question": "Question text here",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "answer": "0"
        }
      ]
      Make sure the response is valid JSON and the answer is the index (0-3) of the correct option.`,
  });

  console.log("summery", response.candidates?.[0].content?.parts?.[0]);
  console.log("quiz", quiz.candidates?.[0].content?.parts?.[0]);

  
  return NextResponse.json(response.candidates?.[0].content?.parts?.[0]);
};

// ```json[
//   {
//     "question": "What was Genghis Khan's birth name?",
//     "options": ["Jamukha", "Temüjin", "Kublai", "Naiman"],
//     "answer": "1"
//   },
//   {
//     "question": "What challenge did Temüjin face after his father's death?",
//     "options": ["He became emperor immediately", "He inherited great wealth", "He faced poverty", "He formed an alliance with the Naiman tribe"],
//     "answer": "2"
//   },
//   {
//     "question": "By what year did Genghis Khan unify the Mongol steppe?",
//     "options": ["Around 1162", "By 1206", "After 1220", "Before 1100"],
//     "answer": "1"
//   },
//   {
//     "question": "Which of the following actions did Temüjin take early in his life to gain power?",
//     "options": ["He killed his half-brother", "He allied with Jamukha permanently", "He surrendered to the Naiman tribe", "He focused solely on diplomacy"],
//     "answer": "0"
//   },
//   {
//     "question": "After becoming the undisputed ruler, into which regions did Genghis Khan expand his empire?",
//     "options": ["Only the Mongol steppe", "Across China and Central Asia", "Into Europe and North Africa", "South America and Australia"],
//     "answer": "1"
//   }
// const str = ]
// ```;
