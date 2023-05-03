import * as React from "react";
import { motion } from "framer-motion";
import styles from "../styles.module.css";
import { MenuItem } from "./MenuItem";
import {
  FaHome,
  FaBook,
  FaCode,
  FaEnvelope,
  FaDollarSign,
} from "react-icons/fa";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
interface Navigation {
  itemsFromMenu: Array<any>;
}
export const Navigation = (props: Navigation) => (
  <motion.ul variants={variants} className={styles.ul}>
    {props.itemsFromMenu.map((props: any) => (
      <MenuItem key={props.name} {...props} />
    ))}
  </motion.ul>
);
