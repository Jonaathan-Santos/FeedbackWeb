import React, { useState } from "react";
import CloseButton from "../CloseButton";
import bugImageURL from "../../assets/bug.png";
import ideaImageURL from "../../assets/idea.png";
import otherImageURL from "../../assets/thought.png";
import FeedbackTypeStep from "./steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      souce: bugImageURL,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      souce: ideaImageURL,
      alt: "Imagem de uma lâmpadaa",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      souce: otherImageURL,
      alt: "Imagem de uma nuvem de pensameentos",
    },
  },
};



export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeeedbackType | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? <FeedbackTypeStep onFeedbackTypeChenged={setFeedbackType}/>: (
        <div className="">Hello Word</div>
      )}
      <footer className="text-xs text-neutral-400">
        Feito por
        <a
          href="https://github.com/Jonaathan-Santos"
          className="underline underline-offset-2"
        >
          Jonathan Santos
        </a>
      </footer>
    </div>
  );
};


