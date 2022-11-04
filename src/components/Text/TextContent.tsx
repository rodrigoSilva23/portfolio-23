
import { useEffect, useState } from "react";
import { TextAnimed } from "./styles";

interface PropsTextContent {
  children: any;
  className?: string;
  delay?: number;
  animationDuration?:string;
  pipeAnimed?: boolean;
}

export const TextContent = ({ children }: PropsTextContent) => {
  return <p>{children}</p>;
};

export const TextAnimedWrite = ({
  className,
  delay,
  children,
  animationDuration,
  pipeAnimed = true
}: PropsTextContent) => {
  const [textAnimed, setTextAnimed] = useState("");
  const textoArray = children.toString().split("");
 
  useEffect(() => {
    console.log(textoArray)
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
  }, [pipeAnimed]);
  
  if(textoArray.length == textAnimed.length ) pipeAnimed = false
  console.log(pipeAnimed)
  return <TextAnimed className={className} animationDuration={animationDuration}>{textAnimed} {pipeAnimed && <span id="pipeAnimed">|sad</span>}</TextAnimed>;
};
