import { useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./redux/appSlice";

import "./css/App.css";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  // useCallback to memoize getInitialData

  const getInitialData = useCallback(async () => {
    console.log(page);
    dispatch(setPage());
  }, [dispatch, page]);

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  return (
    <>
      <div className="App">
        <ScrollToTop />
        <Cursor />
        <Header />
        <Menu />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};
export default App;
