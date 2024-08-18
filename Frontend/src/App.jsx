import { Route, Routes, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setshowLogin={setshowLogin} /> : <></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cart />} />
          <Route path="/" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
