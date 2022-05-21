import React from "react";
import { FeedbackType } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackContentStepProps{
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({feedbackType}: FeedbackContentStepProps) {
  return (
    <>
      <header>
        <p className="text-xl leading-6">{}</p>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        
      </div>
    </>
  );
}
