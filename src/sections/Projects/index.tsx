import { ProjectsContainer } from "./styles";
import { projects } from "./projects";
import { TitleAnimated } from "../../components/Title";
import { ProjectCard } from "../../components/CardProject";
import { Highlight } from "../../components/Highlight";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
export const Projects = () => {
  return (
    <ProjectsContainer>
      <TitleAnimated className="title" AxisIconX={74} sizeIcon={120}>
        Projetos <Highlight content="Conquistado" /> na Jornada
      </TitleAnimated>
      <div className="project-wrapper">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="wrap-cards"
            >
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                sizeIconHeader={project.type === "Front End" ? 75 : 100}
              />
            </motion.div>
          );
        })}
      </div>
    </ProjectsContainer>
  );
};
