import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import slidesData from "../../data/slides.json";

import "./styles.css";

const Swiper = () => {
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const swiper = useRef();

  // Variants for Framer Motion to animate scale and blur
  const variants = {
    hovered: { scale: 1.2 },
    blurred: { filter: "blur(4px)" },
    normal: { scale: 1, filter: "blur(0px)" },
  };

  useEffect(() => {
    setWidth(swiper.current.scrollWidth - swiper.current.offsetWidth);
  }, []);

  return (
    <div className="swiperContainer">
      <motion.div
        ref={swiper}
        className="swiper"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="innerSwiper"
        >
          {slidesData.map((slide, index) => (
            <motion.div
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              animate={
                hovered === index
                  ? "hovered"
                  : hovered !== null
                  ? "blurred"
                  : "normal"
              }
              variants={variants}
              className="swiperItem"
              key={slide.id}
            >
              <img src={slide.imageUrl} alt={slide.title} />
              <div className="details">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Swiper;
