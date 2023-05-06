import SwiperCore, {
  Autoplay,
  EffectFade,
  Thumbs,
  FreeMode,
  EffectCoverflow,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";

type Carrousel = {
  data: Array<any>;
};
export const Carrousel = ({ data }: Carrousel) => {
  return (
    <div className={styles.carrousel}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className={styles.innerCarrousel}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.cardCarrousel}>
              dsfsdf
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
