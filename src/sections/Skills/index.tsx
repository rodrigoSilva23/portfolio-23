"use client";
import { SkillsContainer } from "./styles";
import { skills } from "./skills";
import { TitleAnimated } from "../../components/Title";
import { CardSkill } from "../../components/CardSkill";
import { useState } from "react";
import { Highlight } from "../../components/Highlight";

export const Skills = () => {
  const [IdSkill, setIdSkill] = useState<number>(1);

  return (
    <SkillsContainer id="conhecimentos">
      <TitleAnimated AxisIconX={74} sizeIcon={120}>
        Conquista de <Highlight content="Habilidades"/> na Jornada
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
    </SkillsContainer>
  );
};
