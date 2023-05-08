import { SectionProfile } from "./styles";
import { TitleAnimated } from "../../components/Title";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Image from "next/image";

export const SectionIntroduction = () => {

  return (
    <SectionProfile id="conhecimentos">
      <TitleAnimated AxisIconX={74} sizeIcon={120}>
        Minha <span className="highlight">Jornada</span> Full Stack
      </TitleAnimated>

      <motion.p
        className="textAnimed "
        initial="hidden"
        whileInView="show"
        variants={slideIn({
          direction: "up",
          delay: 0,
        })}
        viewport={{ once: true }}
      >
        Olá, eu sou Rodrigo dos Santos Silva e atuo como desenvolvedor full
        stack. Desde cedo, meu interesse em tecnologia me guiou em busca de
        conhecimento nesta área, e foi assim que descobri minha verdadeira
        paixão. Com uma ampla experiência em projetos full stack, estou
        familiarizado com diversas tecnologias, permitindo-me criar soluções
        robustas e eficazes. Meu objetivo é sempre buscar novos desafios e
        crescer profissionalmente, expandindo minhas habilidades e
        conhecimentos. Neste portfolio, você encontrará alguns dos meus projetos
        mais relevantes, que demonstram meu comprometimento em desenvolver
        soluções criativas e inovadoras como um desenvolvedor full stack.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn({
          direction: "up",
          type: "spring",
          duration: 1.5,
        })}
        viewport={{ once: true }}
      >
        <Image src="/foguete.png" alt="avatar" width={170} height={170} />
      </motion.div>
    </SectionProfile>
  );
};
