import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css"; // Assuming your custom CSS is here
import Card from "../Card.jsx";
import slidesData from "../../data/slides.json";

function CardSwiper() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      initialSlide={1}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Card slide={slide} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
