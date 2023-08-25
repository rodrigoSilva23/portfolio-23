"use client";
import { SkillsContainer } from "./styles";
import { skills } from "./skills";
import { TitleAnimated } from "../../components/Title";
import { motion } from "framer-motion";
import { Highlight } from "../../components/Highlight";

export const Skills = () => {
  return (
    <SkillsContainer>
      <TitleAnimated AxisIconX={74} sizeIcon={120}>
        Conquista de <Highlight content="Habilidades" /> na Jornada
      </TitleAnimated>
      <div className="container">
        {skills.map((skill) => (
          <motion.img
            initial={{ opacity: 0, borderRadius: "50%"}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5, delay: skill.id * 0.1 }}
          
            viewport={{ once: true }}
            key={skill.id}
            src={skill.imgUrl}
            alt={skill.name}
            width={60}
            height={60}
            title={skill.name}
          />
        ))}
      </div>
    </SkillsContainer>
  );
};
