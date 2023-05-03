import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import styles from "./styles.module.css";
import { MenuToggle } from "./steps/MenuToggle";
import { Navigation } from ".//steps/Navigation";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const socialMidia = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
interface midia {}
export const SideBar = ({ itemsFromMenu, midia }: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

 
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.nav}
    >
      <motion.div className={styles.background} variants={sidebar}>
        {midia && (
          <motion.div className={styles.socialMidia} variants={socialMidia}>
            {midia.map((midia: any) => (
              <a href={midia.href} key={midia.name} target="_blank">
                {midia.icon}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>

      <Navigation itemsFromMenu={itemsFromMenu} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
