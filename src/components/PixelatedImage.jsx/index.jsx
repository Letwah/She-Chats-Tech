import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const PixelatedImage = ({ src, pixelSizeN, pixelSizeM }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const image = new Image();

    image.onload = () => {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.drawImage(image, 0, 0);

      const w = image.naturalWidth / pixelSizeN;
      const h = image.naturalHeight / pixelSizeM;

      for (let i = 0; i < pixelSizeN; i++) {
        for (let j = 0; j < pixelSizeM; j++) {
          //pixelated overlay
          const x = i * w;
          const y = j * h;
          const p = ctx.getImageData(x, y, 1, 1).data; //color of the current pixel
          ctx.fillStyle = `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${Math.random()})`; // use actual color
          ctx.fillRect(x, y, w, h);
        }
      }
    };
    image.src = src;
  }, [src, pixelSizeN, pixelSizeM]);

  return <canvas ref={canvasRef} />;
};

PixelatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  pixelSizeN: PropTypes.number.isRequired,
  pixelSizeM: PropTypes.number.isRequired,
};
export default PixelatedImage;
