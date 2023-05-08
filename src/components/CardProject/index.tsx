"use client";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Image from "next/image";
import styles from "./styles.module.css";

type ProjectCardProps = {
  id: number;
  index: number;
  name: string;
  imgUrl: string;
  description: string;
  access: string;
};
export const ProjectCard = ({
  id,
  index,
  name,
  imgUrl,
  description,
  access,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideIn({
        direction: "up",
        type: "spring",
        duration: 1.5,
        delay: index * 0.2,
      })}
      viewport={{ once: true }}
      className={styles.container}
    >
      <div className={styles.wrapImege}>
        <Image src={imgUrl} height={100} width={470} alt={name} />
      </div>
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={access} target="_blank">
          acessar
        </a>
      </div>
    </motion.div>
  );
};
