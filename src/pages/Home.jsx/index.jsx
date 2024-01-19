import { ReactSVG } from "react-svg";

import highResPortrait from "../../assets/images/Em-Bayley-Melendez_color.jpg";

import logo from "../../assets/images/logo.svg";

import "./styles.css";
import PixelatedImage from "../../components/PixelatedImage.jsx";

const Home = () => {
  return (
    <>
      <div className="contentGrid">
        <div>
          <ReactSVG src={logo} />
        </div>
        {/* <div className="imageContainer">
          <img
            key="high-res"
            src={highResPortrait}
            alt="High Res"
            loading="lazy"
            className="pixelated"
            // style="--f-n:30;--f-m:30;"
          />
        </div> */}

        <div className="imageContainer">
          <PixelatedImage
            src={highResPortrait}
            pixelSizeN={300}
            pixelSizeM={30}
          />
        </div>
        {/* <Pixelated src={highResPortrait} alt="hi res" pixelSize={40} /> */}
      </div>
    </>
  );
};

export default Home;
