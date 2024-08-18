import React, { useState } from "react";
import "./LoginPopUp.css";
import { useSearchParams } from "react-router-dom";
import { assets } from "../../assets/assets";
const LoginPopUp = ({ setshowLogin }) => {
  const [currentState, setcurrentState] = useState("sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-tittle">
          <h2>{currentState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name " required />
          )}

          <input type="email" placeholder="Your email " required />
          <input type="password" placeholder="Yourn password " required />
        </div>
        <button>
          {currentState === "sign up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the term of use & privact policy</p>
        </div>

        {currentState === "login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setcurrentState("sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrentState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
