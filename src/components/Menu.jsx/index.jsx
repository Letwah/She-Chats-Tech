// Menu.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const links = ["about", "contact", "home"];

const Menu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    if (href === "home") {
      navigate("/");
    } else {
      navigate("/" + href);
    }
  };

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <a
              key={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
