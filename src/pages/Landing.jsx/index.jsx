import "./styles.css";
import CardSwiper from "../../components/CardSwiper.jsx/index.jsx";
import Marquee from "../../components/Marquee.jsx/index.jsx";
import Quotes from "../../components/Quotes.jsx/index.jsx";
import Intro from "../../components/Intro.jsx/index.jsx";

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
