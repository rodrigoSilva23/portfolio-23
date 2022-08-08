import { CloseButton } from "../CloseButton";
import bugImgUrl from "../../assets/bug.svg";
import ideiaImgUrl from "../../assets/ideia.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep} from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      source: bugImgUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    img: {
      source: ideiaImgUrl,
      alt: "Imagem de uma Lampada",
    },
  },
  OTHER: {
    title: "Outros",
    img: {
      source: thoughtImgUrl,
      alt: "Imagem de uma Pensamento",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  return (
    <div className="bg-zinc-800  p-4 relative  rounded-2xl flex-col items-center shadow-lg text-white w-[calc(100vw-2rem)] sm:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
       <FeedbackContentStep feedbackType={feedbackType}  />
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pelo
        <a href="" className=" ml-2 underline underline-offset-2">
          RodrigoDev
        </a>
      </footer>
    </div>
  );
};
