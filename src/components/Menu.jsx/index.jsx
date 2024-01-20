// Menu.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// s
// import { setCursor } from './redux/appSlice';
import "./styles.css";

const links = ["about", "contact", "home"];

const Menu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverPositions, setHoverPositions] = useState({}); // New state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const onClick = (href) => {
    toggleMenu();
    navigate(href === "home" ? "/" : `/${href}`);
  };

  const handleMouseMove = (e, link) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    setHoverPositions((prev) => ({
      ...prev,
      [link]: { transform: `translate(${xMove}px, ${yMove}px)` },
    }));
  };

  const handleMouseLeave = (link) => {
    setHoverPositions((prev) => ({ ...prev, [link]: { transform: "" } }));
  };

  return (
    <>
      <button
        className={`burger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></button>
      <div className={`background ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="navWrapper">
          <nav>
            {links.map((link, index) => (
              <a
                key={link}
                className={`hoverThis ${isMenuOpen ? "appear" : ""}`}
                style={{ animationDelay: `0.${index + 1}s` }}
                onClick={() => onClick(link)}
                onMouseMove={(e) => handleMouseMove(e, link)}
                onMouseLeave={() => handleMouseLeave(link)}
              >
                <span style={hoverPositions[link]}>{link}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
