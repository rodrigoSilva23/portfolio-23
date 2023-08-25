"use client";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Image from "next/image";
import styles from "./styles.module.css";
import { LinkHTMLAttributes } from "react";

interface ProjectCardProps {
  id: number;
  index: number;
  name: string;
  imgUrl: string;
  description: string;
  access: string;
  type: "Back End" | "Front End";
  sizeIconHeader?: number;
  iconsSkills?: Array<string>;
}
export const ProjectCard = ({
  id,
  index,
  name,
  imgUrl,
  description,
  access,
  type = "Front End",
  sizeIconHeader = 100,
  iconsSkills,
}: ProjectCardProps) => {
  const styleHeader = type.replace(" ", "-").toLowerCase();
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: index * 0.3,
      }}
      viewport={{ once: true, amount: 0.7 }}
      className={styles.container}
    >
      <header className={styles[styleHeader]}>
        <h2>{type}</h2>
        <Image
          src={imgUrl}
          height={sizeIconHeader}
          width={sizeIconHeader}
          alt={name}
        />
      </header>
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.wrapIcons}>
          {iconsSkills?.map((icon: string) => (
            <img key={id} src={icon} alt="habilidades usadas" />
          ))}

        </div>
        <div>
          {/* <a href={access} target="_blank">
            visualizar
          </a> */}
          <a href={access} target="_blank">
            acessar
          </a>
        </div>
      </footer>
    </motion.div>
  );
};
