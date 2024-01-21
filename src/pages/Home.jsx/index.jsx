// import { useDispatch } from "react-redux";
import Header from "../../components/Header.jsx";

import "./styles.css";
import About from "../About.jsx ";

// import { setCursorType } from "../../redux/appSlice";

const Home = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="contentGrid">
        <About />
      </div>
    </>
  );
};

export default Home;
