"use client";
import { Header } from "@/components/Header";
import { Quick } from "@/components/Quick";
import { Sidebar } from "@/components/ui/sidebar";
import { useState } from "react";
type HeaderProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  generateSummery: () => void;
  summery: string;
  generateQuiz: () => void;
};
export default function Home() {
  const [text, setText] = useState<string>("");
  const [summery, setSummery] = useState<string>("");
  const [quiz, setQuiz] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const generateSummery = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: text,
    });
    const data = await res.json();
    console.log(data);
    setSummery(data.text);
    console.log(summery);
  };

  // const generateQuiz = async () => {
  //   const res = await fetch("/api/generate", {
  //     method: "POST",
  //     body: text,
  //   });
  //   const quiz = await res.json();
  //   console.log(quiz, "quuuuuuzi");
  //   setQuiz(quiz.text);
  //   console.log();
  // };

  return (
    <div>
      <Sidebar></Sidebar>
      <Header
        text={text}
        setText={setText}
        summery={summery}
        generateSummery={generateSummery}
      />
      <Quick></Quick>
    </div>
  );
}
