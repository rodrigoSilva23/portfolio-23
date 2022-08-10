import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button";
import { TextAnimedWrite } from "../Text/TextContent";
import { SectionProfile } from "./styles";

export const SectionIntroduction = () => {
  const [startTextAnimed, SetStartTextAnimed] = useState(false);
  window.addEventListener("scroll", () => {
    const getPositionScroll = window.scrollY;
    if (getPositionScroll >= 170) SetStartTextAnimed(true)
    
  });
  
  return (
    <SectionProfile id="conhecimentos">
      {startTextAnimed && (
        <TextAnimedWrite className="textAnimed  ">
          &nbsp;olá,&nbsp;Sou o Rodrigo desenvolvedor Full Stack e entusiasta de tecnologia,  gosto de um bom
          desafio e de adquirir novos conhecimentos .
        </TextAnimedWrite>
      )}

      <div className="profile-emoji">
        <span>👨🏿‍💻</span>
      </div>
      {startTextAnimed && (
        <TextAnimedWrite className="textAnimed text2 text-query" delay={9000}>
           &nbsp; &nbsp;aprender é navegar sem rumo e descobrir maravilhas que nunca
          poderíamos imaginar.
        </TextAnimedWrite>
      )}
    </SectionProfile>
  );
};
