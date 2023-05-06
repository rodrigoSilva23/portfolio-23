import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { FaGithubAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { slideIn } from "../../utils/motion";

type SocialMidias = {
  className?: string;
  isAnimation?: boolean;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};
export const SocialMidias = ({
  className,
  isAnimation = false,
  direction = "left",
  delay = 2,
}: SocialMidias) => {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      initial="hidden"
      whileInView="show"
      variants={slideIn({
        direction: direction,
        delay: delay,
      })}
    >
      <a
        href="https://www.instagram.com/rodrigosilva.up/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/rodrigoSilva23"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubAlt />
      </a>

      <a
        href="https://www.linkedin.com/in/rodrigo-santos-silva-059b9a193/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </motion.div>
  );
};
