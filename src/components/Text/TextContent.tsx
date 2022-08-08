import { Console } from "console";
import { useEffect, useState } from "react";
import { TextAnimed } from "./styles";

interface PropsTextContent {
  children: any;
  className?: string;
  delay?: number;
  animationDuration?:string
}

export const TextContent = ({ children }: PropsTextContent) => {
  return <p>{children}</p>;
};

export const TextAnimedWrite = ({
  className,
  delay,
  children,
  animationDuration
}: PropsTextContent) => {
  const [textAnimed, setTextAnimed] = useState("");
  const textoArray = children.toString().split("");
  useEffect(() => {
    setTimeout(
      () => {
        var text = " ";
        textoArray.forEach(function (letra: String, i: number) {
          setTimeout(() => {
            text += letra;
            setTextAnimed(text);
          }, 70 * i);
        });
      },
      delay ? delay : 0
    );
  }, []);
  return <TextAnimed className={className} animationDuration={animationDuration}>{textAnimed}</TextAnimed>;
};
