import * as React from "react";
import { motion } from "framer-motion";

const variants = {
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

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactElement;
}
export const MenuItem = (props: MenuItem) => {
  const { name, href, icon } = props;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={href}>
        <span>{icon}</span>
        <span>{name}</span>
      </a>
    </motion.li>
  );
};
