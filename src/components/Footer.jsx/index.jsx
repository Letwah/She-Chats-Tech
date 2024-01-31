import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import instaIcon from "../../assets/icons/WIFI.svg";
import linkedInIcon from "../../assets/icons/info.svg";

import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerLink insta">
          <Link to="/">
            <h4>Insta</h4>
            <ReactSVG src={instaIcon} />
          </Link>
        </div>
        <div className="footerLink copywrite">
          <p> © SHE CHATS TECH 2024</p>
        </div>
        <div className="footerLink linkedIn">
          <Link to="/">
            <ReactSVG src={linkedInIcon} />
            <h4>LinkedIn</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
