import { useState } from "react";
import { TextAnimedWrite } from "../Text/TextContent";
import { SectionProfile } from "./styles";
import { TitleAnimated } from "../Title";
import { FaMinus} from "react-icons/fa";

export const SectionIntroduction = () => {
  const [startTextAnimed, SetStartTextAnimed] = useState(false);

  window.addEventListener("scroll", () => {
    const getPositionScroll = window.scrollY;
    if (getPositionScroll >= 170) SetStartTextAnimed(true);
  });

  return (
    <SectionProfile id="conhecimentos">
      <TitleAnimated title="Sobre" />

      {startTextAnimed && (
        <TextAnimedWrite className="textAnimed " velocityWrite={25}>
          Olá, eu sou Rodrigo dos Santos Silva e atuo como desenvolvedor full
          stack. Desde cedo, meu interesse em tecnologia me guiou em busca de
          conhecimento nesta área, e foi assim que descobri minha verdadeira
          paixão. Com uma ampla experiência em projetos full stack, estou
          familiarizado com diversas tecnologias, permitindo-me criar soluções
          robustas e eficazes. Meu objetivo é sempre buscar novos desafios e
          crescer profissionalmente, expandindo minhas habilidades e
          conhecimentos. Neste portfolio, você encontrará alguns dos meus
          projetos mais relevantes, que demonstram meu comprometimento em
          desenvolver soluções criativas e inovadoras como um desenvolvedor full
          stack.
        </TextAnimedWrite>
      )}
      <div className="secundary-content">
      {startTextAnimed && (
        <TextAnimedWrite className="textAnimed " velocityWrite={25}>
          Olá, eu sou Rodrigo dos Santos Silva e atuo como desenvolvedor full
          stack. Desde cedo, meu interesse em tecnologia me guiou em busca de
          conhecimento nesta área, e foi assim que descobri minha verdadeira
          paixão. Com uma ampla experiência em projetos full stack, estou
          familiarizado com diversas tecnologias, permitindo-me criar soluções
          robustas e eficazes. Meu objetivo é sempre buscar novos desafios e
          crescer profissionalmente, expandindo minhas habilidades e
          conhecimentos. Neste portfolio, você encontrará alguns dos meus
          projetos mais relevantes, que demonstram meu comprometimento em
          desenvolver soluções criativas e inovadoras como um desenvolvedor full
          stack.
        </TextAnimedWrite>
      )}
        <span>💻</span>
      </div>
    </SectionProfile>
  );
};
