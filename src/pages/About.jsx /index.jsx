import PixelatedImage from "../../components/PixelatedImage.jsx";
import highResPortrait from "../../assets/images/Em-crop-big.jpg";

import "./styles.css";
import Swiper from "../../components/Swiper.jsx/index.jsx";

const About = () => {
  return (
    <>
      <div className="intro">
        <h1>
          <strong>She Chats Tech</strong> was created as a Community for women
          aspiring to be and women in tech from non-tech backgrounds.
        </h1>
        <button className="cta">
          <a href="/contact">Sign Up</a>
        </button>
      </div>
      <div className="aboutWrapper">
        <div className="aboutBio">
          <p>
            Meet Founder, creator and developer, Em Bayley-Melendez of{" "}
            <strong>She Chats Tech.</strong>
          </p>
        </div>

        <div className="imageContainer">
          <div>
            <img
              key="high-res"
              src={highResPortrait}
              alt="High Res"
              loading="lazy"
              className="originalImage"
            />
          </div>

          <div>
            <PixelatedImage
              src={highResPortrait}
              pixelSizeN={50}
              pixelSizeM={50}
            />
          </div>
        </div>
      </div>
      <Swiper />
      <div className="grid3">
        <div className="intro">
          <h3>
            <strong>She Chats Tech</strong> was created as a Community for women
            aspiring to be and women in tech from non-tech backgrounds.
          </h3>
        </div>
        <div className="intro">
          <h3>
            <strong>She Chats Tech</strong> was created as a Community for women
            aspiring to be and women in tech from non-tech backgrounds.
          </h3>
        </div>
        <div className="intro">
          <h3>
            <strong>She Chats Tech</strong> was created as a Community for women
            aspiring to be and women in tech from non-tech backgrounds.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
