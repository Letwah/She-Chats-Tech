import { useEffect } from "react";
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

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const getInitialData = async () => {
    console.log(page);
    dispatch(setPage());
  };

  useEffect(() => {
    getInitialData();
  });

  return (
    <>
      <div className="App">
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
