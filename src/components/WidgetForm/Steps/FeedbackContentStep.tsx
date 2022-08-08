import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}
export const FeedbackContentStep = ({feedbackType}: FeedbackContentStepProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header >
      <button
      className=" top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Volta para a tela Inicial"
    >
      <ArrowLeft weight="bold" className="w-4 h-4  " />
    </button>
 
        <span className="text-xl leading-6 flex items-center gap-2 justify-center">
        <img src={feedbackTypeInfo.img.source} alt={feedbackTypeInfo.img.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title} 
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
      
      </div>
    </>
  );
};
