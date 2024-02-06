import { ReactSVG } from "react-svg";

import instaIcon from "../../assets/icons/WIFI.svg";
import linkedInIcon from "../../assets/icons/info.svg";

import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerLink insta">
          <a
            href="https://www.instagram.com/shechatstech/"
            target="_blank"
            rel="noreferrer"
            style={{
              textTransform: "uppercase",
              fontFamily: '"Space Grotesk", sans-serif',
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "bold",
            }}
          >
            Insta
            <ReactSVG src={instaIcon} />
          </a>
        </div>
        <div className="footerLink copywrite">
          <p> © SHE CHATS TECH 2024</p>
        </div>
        <div className="footerLink linkedIn">
          <a
            href="https://https://www.linkedin.com/company/she-chats-tech/"
            target="_blank"
            rel="noreferrer"
            style={{
              textTransform: "uppercase",
              fontFamily: '"Space Grotesk", sans-serif',
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "bold",
            }}
          >
            <ReactSVG src={linkedInIcon} />
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
