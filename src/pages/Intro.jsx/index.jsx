import PixelatedImage from "../../components/PixelatedImage.jsx/index.jsx";
import highResPortrait from "../../assets/images/Em-crop-big.jpg";

import "./styles.css";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <h1>
          <strong>She Chats Tech</strong> was created as a Community for women
          aspiring to be and women in tech from non-tech backgrounds.
        </h1>
        <button className="cta">
          <a
            href="https://www.linkedin.com/company/she-chats-tech/"
            target="_blank"
            rel="noreferrer"
          >
            Sign Up
          </a>
        </button>
      </div>
      <div className="aboutWrapper">
        <div className="aboutBio">
          <p>Meet tech career changer,</p>
          <p>creative &</p>
          <p>
            <strong> She Chats Tech Founder, </strong>
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
    </>
  );
};

export default Intro;
