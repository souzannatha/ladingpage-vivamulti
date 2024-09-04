"use client";
import { useState } from "react";
import Image from "next/image";

interface AccordionListProps {
  title: string;
  answer: string;
  isFirst?: boolean;
}

export function AccordionList({
  title,
  answer,
  isFirst = false,
}: AccordionListProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`w-[1029px] transition-all duration-300 ease-in-out ${
        accordionOpen
          ? "h-[238px] px-10 py-11 bg-blueCustom-blue04 rounded-t-2xl border-none"
          : "h-[120px] px-4 py-4 bg-white border-2 border-[#E8EBF8] rounded-none"
      } ${isFirst ? "border-t-2 border-[#E8EBF8]" : ""}`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full focus:outline-none"
      >
        <span className="font-bold text-2xl text-blueCustom-blue05 mb-14">
          {title}
        </span>
        {accordionOpen ? (
          <Image
            src="/icon-plus-outline.svg"
            width={30}
            height={30}
            alt="icon"
          />
        ) : (
          <Image src="/icon-plus-blue.svg" width={30} height={30} alt="icon" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-lg text-blueCustom-blueBlack">
          {answer}
        </div>
      </div>
    </div>
  );
}
