import { ReactSVG } from "react-svg";

import highResPortrait from "../../assets/images/Em-Bayley-Melendez_color.jpg";

import logo from "../../assets/images/logo.svg";

import "./styles.css";
// import Pixelate from "../../components/Pixelate.jsx";

const Home = () => {
  return (
    <>
      <div className="contentGrid">
        <div>
          <ReactSVG src={logo} />
        </div>

        <div className="imageContainer">
          <img
            key="high-res"
            src={highResPortrait}
            alt="High Res"
            loading="lazy"
            className="animatedBlob"
          />
        </div>
        {/* <Pixelated src={highResPortrait} alt="hi res" pixelSize={40} /> */}
      </div>
    </>
  );
};

export default Home;
