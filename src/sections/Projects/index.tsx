import { ProjectsContainer } from "./styles";
import { projects } from "./projects";
import { TitleAnimated } from "../../components/Title";
import { ProjectCard } from "../../components/CardProject";
import { Highlight } from "../../components/Highlight";

export const Projects = () => {

  return (
    <ProjectsContainer>
      <TitleAnimated className="title" AxisIconX={74} sizeIcon={120}>
        Projetos <Highlight content="Conquistado"/>  na Jornada
      </TitleAnimated>
      <div className="wrap-cards">
        {projects.map((project,index) => {
          return <ProjectCard key={project.id} index={index} {...project}/>;
        })}
      </div>
    </ProjectsContainer>
  );
};
