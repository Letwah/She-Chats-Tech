import "./styles.css";
import CardSwiper from "../../components/CardSwiper";
import Marquee from "../../components/Marquee";
import Quotes from "../../components/Quotes";
import Intro from "../../components/Intro";

const Landing = () => {
  return (
    <>
      <Intro />
      <CardSwiper />
      <Marquee />
      <Quotes />
    </>
  );
};

export default Landing;
