"use client";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [summery, setSummery] = useState<string>("");

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

  return (
    <div>
      <Sidebar></Sidebar>
      <Header
        text={text}
        setText={setText}
        summery={summery}
        generateSummery={generateSummery}
      />
    </div>
  );
}
