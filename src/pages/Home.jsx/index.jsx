import { ReactSVG } from "react-svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHighResImageLoaded,
  selectHighResImageLoaded,
} from "../../redux/appSlice";
import highResPortrait from "../../assets/images/Em-Bayley-Melendez_color.jpg";
import lowResPortrait from "../../assets/images/Em_color-SMALL-1.jpg";
import logo from "../../assets/images/logo.svg";

import "./styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const highResImageLoaded = useSelector(selectHighResImageLoaded);

  useEffect(() => {
    const loadDelay = 1000;
    const img = new Image();
    img.src = highResPortrait;
    img.onload = () => {
      setTimeout(() => {
        dispatch(setHighResImageLoaded(true));
      }, loadDelay);
    };
    // Handle image load error
    img.onerror = () => {
      console.error("High-resolution image failed to load.");
      // Dispatch an error action or handle the error state appropriately
    };
  }, [dispatch]);

  return (
    <>
      <div className="contentGrid">
        <div>
          <ReactSVG src={logo} />
        </div>

        <div className="imageContainer">
          {highResImageLoaded ? (
            <img
              key="high-res"
              className="highRes"
              src={highResPortrait}
              alt="High Res"
            />
          ) : (
            <img
              key="low-res"
              className="pixelated"
              src={lowResPortrait}
              alt="Low Res"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
