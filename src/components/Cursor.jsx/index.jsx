import { useState, useEffect } from "react";
import "./styles.css"; // Make sure this path is correct

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverClass, setHoverClass] = useState("");

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    const handleMouseInteraction = (e) => {
      if (e.target.closest("a")) {
        setHoverClass("cursorHover");
      } else if (e.target.closest(".swiper")) {
        setHoverClass("cursorDrag");
      } else {
        setHoverClass("");
      }
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseInteraction);
    document.addEventListener("mouseout", handleMouseInteraction);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseInteraction);
      document.removeEventListener("mouseout", handleMouseInteraction);
    };
  }, []);
  return (
    <div
      className={`cursor ${hoverClass}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
