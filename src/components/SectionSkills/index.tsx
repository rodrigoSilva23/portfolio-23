import { SectionSkillsContainer } from "./styles";
import { skills } from "./skills";
import { TitleAnimated } from "../Title";
import { Carrousel } from "../Carrousel";

export const SectionSkills = () => {
  return (
    <SectionSkillsContainer id="conhecimentos">
      <TitleAnimated title="Habilidades" sizeIcon={155} />
      <div className="wrap-carrousel">
        <Carrousel data={skills} />
        
      </div>
    </SectionSkillsContainer>
  );
};
