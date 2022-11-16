import React from "react";
import Clock from "../Clock/Clock";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Weather App </h1>
      <Clock />
      <div className="navbar__links">
        <Link to="/weatherApp/" className="navbar__weather">
          Check Weather
        </Link>
        <Link to="/todos" className="navbar__todo">
          Todo List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
