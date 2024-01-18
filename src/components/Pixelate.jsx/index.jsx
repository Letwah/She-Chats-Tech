import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css"; // Import the CSS file for styling

const Pixelated = ({ src, alt, pixelSize }) => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImage(img);
    img.src = src;
  }, [src]);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const scale = pixelSize || 10; // Default pixel size

      // Set canvas dimensions based on the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the pixelated image
      ctx.drawImage(image, 0, 0, image.width / scale, image.height / scale);
      ctx.drawImage(
        canvas,
        0,
        0,
        image.width / scale,
        image.height / scale,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  }, [image, pixelSize]);

  const handleMouseEnter = () => {
    if (canvasRef.current && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Clear the canvas and draw the original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  };

  const handleMouseLeave = () => {
    if (canvasRef.current && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const scale = pixelSize || 10; // Default pixel size

      // Redraw the pixelated image
      ctx.drawImage(image, 0, 0, image.width / scale, image.height / scale);
      ctx.drawImage(
        canvas,
        0,
        0,
        image.width / scale,
        image.height / scale,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  };

  // Define propTypes for your component
  Pixelated.propTypes = {
    src: PropTypes.string.isRequired, // src should be a string and is required
    alt: PropTypes.string, // alt should be a string
    pixelSize: PropTypes.number, // pixelSize should be a number
  };

  // Default props in case they are not provided
  Pixelated.defaultProps = {
    alt: "", // Default empty string for alt
    pixelSize: 10, // Default value for pixelSize
  };

  return (
    <canvas
      ref={canvasRef}
      width={image ? image.width : 0}
      height={image ? image.height : 0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      alt={alt}
      style={{ imageRendering: "pixelated -moz-crisp-edges crisp-edges" }}
    />
  );
};

export default Pixelated;
