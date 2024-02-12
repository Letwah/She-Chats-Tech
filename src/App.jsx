import { useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./redux/appSlice";

import "./css/App.css";

import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx ";
import Contact from "./pages/Contact.jsx";

import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
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
