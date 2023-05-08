import { SectionProjectsContainer } from "./styles";
import { projects } from "./projects";
import { TitleAnimated } from "../../components/Title";
import { ProjectCard } from "../../components/CardProject";

export const SectionProjects = () => {

  return (
    <SectionProjectsContainer>
      <TitleAnimated className="title" AxisIconX={74} sizeIcon={120}>
        Projetos <span className="highlight"> Conquistado </span> na Jornada
      </TitleAnimated>
      <div className="wrap-cards">
        {projects.map((project,index) => {
          return <ProjectCard key={project.id} index={index} {...project}/>;
        })}
      </div>
    </SectionProjectsContainer>
  );
};
