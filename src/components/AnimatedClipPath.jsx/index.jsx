import { useRef, useEffect } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const AnimatedClipPath = ({ startPath, endPath, duration }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.to(pathRef.current, {
      duration: duration,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      attr: { d: endPath },
    });
  }, [endPath, duration, pathRef]);

  return (
    <svg width="365" height="365" viewBox="0 0 365 365">
      <path ref={pathRef} d={startPath} fill="none" />
    </svg>
  );
};

AnimatedClipPath.propTypes = {
  startPath: PropTypes.string.isRequired,
  endPath: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default AnimatedClipPath;
