import { ReactSVG } from "react-svg";
// import { useDispatch } from "react-redux";
import highResPortrait from "../../assets/images/Em-Bayley-Melendez_color.jpg";
import logo from "../../assets/images/logo.svg";

import "./styles.css";
import PixelatedImage from "../../components/PixelatedImage.jsx";
// import { setCursorType } from "../../redux/appSlice";

const Home = () => {
  // const dispatch = useDispatch();

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
            className="originalImage"
          />

          <PixelatedImage
            src={highResPortrait}
            pixelSizeN={50}
            pixelSizeM={50}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
