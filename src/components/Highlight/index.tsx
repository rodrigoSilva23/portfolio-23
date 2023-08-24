import { motion } from "framer-motion";

type HighlightProps = {
  content: string;
}
export const Highlight = (props: HighlightProps) => {
  return (
    <motion.span
    initial={{
      padding: "0 5px",
      background: "linear-gradient(90deg, var( --primary-100) 2%, var( --primary-200)100.78%)",
      color: "var(--text-100)",
    }}

    >
     {props.content}
    </motion.span>
  );
};
