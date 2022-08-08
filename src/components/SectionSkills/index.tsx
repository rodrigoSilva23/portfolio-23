import { SectionSkillsContainer } from "./styles";
import { skills } from "./skills";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Thumbs,
  FreeMode,
  Navigation,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";

export const SectionSkills = () => {
  return (
    <SectionSkillsContainer id="conhecimentos">
      <h1>Habilidades</h1>
      <div>
        <Swiper
          loop={true}
          navigation={true}
          effect={"cards"}
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Thumbs, EffectCards]}
          className="container-carousel"
        >
          {skills.map((item) => {
            return (
              <SwiperSlide key={item.id} className="card-skill">
                <header>
                  <span className="text-align-center">
                    <img src={item.imgFundo} width="30" />
                    {item.skill}
                  </span>
                </header>
                <main>
                  <span>{item.description}</span>
                </main>
                <img className="img-fundo" src={item.imgFundo} />
                <footer>
                  <Button className="text-align-center">
                    <a href={item.saibaMais} target="_blank" rel='noreferrer'>
                      Saiba Mais-
                      <small>{item.skill}</small>
                    </a>
                  </Button>
                </footer>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="container-skills-img">
          {skills.map((item) => {
            return (
              <img
                src={item.img}
                key={item.id}
                height={"50px"}
                width={"50px"}
              />
            );
          })}
        </div>
      </div>
    </SectionSkillsContainer>
  );
};
