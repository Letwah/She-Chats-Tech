import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import logo from "../../assets/images/logo.svg";
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
    <div className="header">
      <div className={shrinkLogo ? "logo shrink-logo" : "logo"}>
        <ReactSVG src={logo} />
      </div>
      {/* Other header content */}
    </div>
  );
};

export default Header;
