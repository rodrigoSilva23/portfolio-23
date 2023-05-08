"use client";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

type CardSkillProps = {
  id: number;
  index: number;
  name: string;
  imgUrl: string;
  cardIdSelected: number;
  description: string;
  handleClick: (id: number) => void;
};
export const CardSkill = ({
  id,
  index,
  name,
  imgUrl,
  cardIdSelected,
  description,
  handleClick,
}: CardSkillProps) => {
  const [sizeWidth, setSizeWidth] = useState(0);
  window.addEventListener("resize", () => setSizeWidth(window.innerWidth));
  console.log(sizeWidth);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideIn({
        direction: sizeWidth <= 928 ? "up" : "right",
        type: "spring",
        delay: index * 0.4,
        duration: 1.5,
      })}
      viewport={{ once: true, amount: 0.9 }}
      onClick={() => handleClick(id)}
      className={styles.container}
    >
      {id === cardIdSelected ? (
        <div className={styles.containerSelected}>
          <div>
            <h1>
              <Image src={imgUrl} alt={name} width={20} height={20} />
              {name}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className={styles.containerNotSelected}>
          <div>
            <Image src={imgUrl} alt={name} width={40} height={50} />
          </div>
        </div>
      )}
    </motion.div>
  );
};
