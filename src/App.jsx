import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./redux/appSlice";
import "./css/App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const getInitialData = async () => {
    console.log(page);
    dispatch(setPage());
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
