"use client";
import { SectionSkillsContainer } from "./styles";
import { skills } from "./skills";
import { TitleAnimated } from "../../components/Title";
import { CardSkill } from "../../components/CardSkill";
import { useState } from "react";

export const SectionSkills = () => {
  const [IdSkill, setIdSkill] = useState<number>(0);

  return (
    <SectionSkillsContainer id="conhecimentos">
      <TitleAnimated AxisIconX={74} sizeIcon={120}>
        Conquista de <span className="highlight">Habilidades</span> na Jornada
      </TitleAnimated>
      <div className="container">
        {skills.map((skill, index) => (
          <CardSkill
            key={index}
            {...skill}
            index={index}
            cardIdSelected={IdSkill}
            handleClick={setIdSkill}
          />
        ))}
      </div>
    </SectionSkillsContainer>
  );
};
