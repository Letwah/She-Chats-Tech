import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const PixelatedImage = ({
  src,
  pixelSizeN,
  pixelSizeM,
  onMouseEnter,
  onMouseLeave,
}) => {
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
          // Draw a pixelated overlay
          const x = i * w;
          const y = j * h;
          const p = ctx.getImageData(x, y, 1, 1).data; // Get the color of the current pixel
          ctx.fillStyle = `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${Math.random()})`; // Use the actual color
          ctx.fillRect(x, y, w, h); // Draw the pixelation
        }
      }
    };

    image.src = src;
  }, [src, pixelSizeN, pixelSizeM]);

  return (
    <div className="canvasContainer">
      <canvas
        ref={canvasRef}
        className="canvasPixelated"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

PixelatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  pixelSizeN: PropTypes.number.isRequired,
  pixelSizeM: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
export default PixelatedImage;
