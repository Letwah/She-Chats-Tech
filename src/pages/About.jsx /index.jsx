import PixelatedImage from "../../components/PixelatedImage.jsx";
import highResPortrait from "../../assets/images/Em-Bayley-Melendez_color.jpg";

import "./styles.css";
const About = () => {
  return (
    <>
      <div className="intro">
        <h1>
          <strong>She Chats Tech</strong> was created as a Community for women
          aspiring to be and women in tech from non-tech backgrounds.
        </h1>
      </div>
      <div className="aboutWrapper">
        <div className="aboutBio">
          <p>
            Meet Founder, creator and developer, Em Bayley-Melendez of{" "}
            <strong>She Chats Tech.</strong>
          </p>
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

export default About;
