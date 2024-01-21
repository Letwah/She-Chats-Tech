import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logoLARGE-crop.svg";
import "./styles.css";

const Header = () => {
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkLogo(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${shrinkLogo ? "shrink-header fixed-header" : ""}`}>
      <Link to="/">
        <div className={`logo ${shrinkLogo ? "shrink-logo" : ""}`}>
          <ReactSVG src={logo} />
        </div>
      </Link>
      {/* Other header content */}
    </div>
  );
};

export default Header;
