import React from "react";
import { feedbackTypes, FeedbackType } from "../";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChenged: (type: FeedbackType) => void;
}

function FeedbackTypeStep({ onFeedbackTypeChenged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <p className="text-xl leading-6">Deixe seu feedback</p>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-x-brand-500 focus:outline-none"
              type="button"
              key={key}
              onClick={() => onFeedbackTypeChenged(key as FeedbackType)}
            >
              <img src={value.image.souce} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default FeedbackTypeStep;
