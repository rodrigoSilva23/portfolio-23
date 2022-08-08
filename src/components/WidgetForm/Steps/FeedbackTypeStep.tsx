import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}
export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
        <span className="text-xl leading-6 mt-56">Deixe seu feedback </span>
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-zinc-700  rounded-lg py-5 w-20   flex  flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.img.source} alt={value.img.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
