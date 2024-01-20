import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCursor } from "../../redux/appSlice";

import "../../css/App.css";

const Cursor = () => {
  const cursorType = useSelector(selectCursor);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [cursorType]);

  return (
    <div
      className={`customCursor cursor ${cursorType}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
