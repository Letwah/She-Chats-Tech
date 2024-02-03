import PixelatedImage from "../../components/PixelatedImage.jsx/index.jsx";
import highResPortrait from "../../assets/images/Em-crop-big.jpg";

import "./styles.css";
import Swiper from "../../components/Swiper.jsx/index.jsx";
import Marquee from "../../components/Marquee.jsx/index.jsx";
import Quotes from "../../components/Quotes.jsx/index.jsx";

const Landing = () => {
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
          <p>Meet tech career changer,</p>
          <p>
            creative &<strong> She Chats Tech Founder, </strong>
          </p>
          <p>Em Bayley-Melendez. </p>
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
      <Marquee />
      <Quotes />
    </>
  );
};

export default Landing;
