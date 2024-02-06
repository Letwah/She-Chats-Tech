import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logoLARGE-crop.svg";
import "./styles.css";

const Header = () => {
  const [shrinkLogo, setShrinkLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const pathsWithShrinkHeader = ["/about", "/contact"];

      const isShrunk =
        pathsWithShrinkHeader.includes(location.pathname) ||
        window.scrollY > 50;
      setShrinkLogo(isShrunk);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={`header ${shrinkLogo ? "shrink-header fixed-header" : ""}`}>
      <Link to="/">
        <div className={`logo ${shrinkLogo ? "shrink-logo" : ""}`}>
          <ReactSVG src={logo} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
