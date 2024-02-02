import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./redux/appSlice";
import "./css/App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx ";
import Contact from "./pages/Contact.jsx";
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
        <Header />
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Cursor />
        <Footer />
      </div>
    </>
  );
};
export default App;
