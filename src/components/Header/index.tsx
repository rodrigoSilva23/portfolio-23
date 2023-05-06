import { HeaderWrapper } from "./styles";
import Image from "next/image";
import { HeroPattern } from "../HeroPattern";
import { SocialMidias } from "../SocialMidias";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const Header = () => {
  return (
    <HeaderWrapper id="home">
      <HeroPattern />
      <SocialMidias className="social-midia" />
    

      <motion.div
        className="avatarWrapper"
        initial="hidden"
        whileInView="show"
        variants={slideIn({
          direction: "right",
        })}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/55798409?v=4"
          alt="avatar"
          width={155}
          height={155}
        />
      </motion.div>
      <div className="content">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={slideIn({
            direction: "left",
          })}
        >
          Rodrigo dos santos silva
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={slideIn({
            direction: "right",
          })}
        >
          Web Developer - Full Stack{" "}
        </motion.p>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
