import React from "react";
import logo from "/src/assets/react.svg";
import Signup from "./SignUp";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Links">
       <Link to={'/'}>
       <img src={logo} className="logo" alt="react logo" /> 
      </Link>
      <div className="link">
        
        <Link to='/signup' className="btn btn-two">Signup</Link> 
        <Link to='/login' className="btn btn-three">Login</Link>
      </div>
    </div>
  );
};

export default Header;
