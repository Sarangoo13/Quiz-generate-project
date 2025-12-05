import { query } from "@/lib/connetDB";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

type HeaderProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  generateSummery: () => void;
  summery: string;
  generateQuiz: () => void;
};
export function Header(props: HeaderProps) {
  const { text, setText, generateSummery, summery, generateQuiz } = props;

  return (
    <div className="">
      <div className="flex gap-[8px]">
        <div>
          <BsStars size={32} />
        </div>
        <div>
          <h2 className="text-[#000000] font-semibold text-[24px]">
            Article Quiz Generator
          </h2>
          <p className="text-[#71717A] font-normal text-[16px]">
            Paste your article below to generate a summarize and quiz question.
            Your articles will saved in the sidebar for future reference.
          </p>
        </div>
      </div>
      <div className="flex gap-[4px] mt-[20px]">
        <FiFileText />
        <p className="text-[#71717A] font-normal text-[14px]">Article Title</p>
      </div>
      <Input
        className=""
        type="text"
        placeholder="Enter a title for your article..."
      ></Input>
      <div className="flex gap-[4px] mt-[20px]">
        <FiFileText />
        <p className="text-[#71717A] font-normal text-[14px]">
          Article Content
        </p>
      </div>
      <Textarea
        placeholder="Paste your article content here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        onClick={generateSummery}
        variant={"secondary"}
        className="p-[16px] bg-[#E4E4E7] text-black mt-[20px] ml-[628px]"
      >
        Generate summary
      </Button>
      {summery && <p>{summery}</p>}
    </div>
  );
}
