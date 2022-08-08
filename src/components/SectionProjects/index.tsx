import { SectionProjectsContainer } from "./styles";
import { skills } from "./skills";
import SwiperCore, {
  Autoplay,
  EffectFade,
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

export const SectionProjects = () => {
  return (
    <SectionProjectsContainer id="conhecimentos">
      <h1>Projetos</h1>
      <div>
        <Swiper
          loop={true}
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
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
                      Saiba Mais
                    </a>
                  </Button>
                </footer>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </SectionProjectsContainer>
  );
};
