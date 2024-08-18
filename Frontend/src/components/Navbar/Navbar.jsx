import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search_icon.png";
import basketicon from "../../assets/basket_icon.png";
import { useState } from "react";
const Navbar = ({ setshowLogin }) => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setmenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={searchicon} alt="search_icon" />
        <div className="navbar-search-icon">
          <img src={basketicon} alt="basket_icon" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setshowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
