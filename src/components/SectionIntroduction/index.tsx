import { useState } from "react";
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
      <h1>Sobre</h1>
      {startTextAnimed && (
        <TextAnimedWrite className="textAnimed " velocityWrite={40}>
            Olá, sou Rodrigo dos santos silva e sou um desenvolvedor full stack.
            Desde muito jovem, sempre me interessei por tecnologia e, quando decidi seguir
            minha carreira como desenvolvedor, descobri minha verdadeira paixão. Hoje, 
            tenho experiência em projetos full stack, trabalhando com uma variedade de tecnologias, 
            incluindo JavaScript, Node.js, React, Angular, MongoDB, MySQL e muitas outras. 
            Meu objetivo é sempre aprender e crescer profissionalmente, 
            e estou em busca de novas oportunidades para me desafiar e expandir meus conhecimentos. 
            Neste portfolio, apresentarei alguns dos meus projetos mais relevantes e espero que possa ter uma visão clara do que posso oferecer como desenvolvedor full stack.
        </TextAnimedWrite>
      )}
    </SectionProfile>
  );
};
