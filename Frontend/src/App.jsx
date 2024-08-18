import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
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
