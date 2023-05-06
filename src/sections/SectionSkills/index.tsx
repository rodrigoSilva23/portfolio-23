import { SectionSkillsContainer } from "./styles";
import { skills } from "./skills";
import { TitleAnimated } from "../../components/Title";
import { Carrousel } from "../../components/Carrousel";


export const SectionSkills = () => {
  return (
    <SectionSkillsContainer id="conhecimentos">
      <TitleAnimated  sizeIcon={155} />
      <div className="wrap-carrousel">
        <Carrousel data={skills} />
        
      </div>
    </SectionSkillsContainer>
  );
};
