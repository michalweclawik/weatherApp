import React from "react";
import Clock from "../Clock/Clock";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Weather App </h1>
      <Clock />
      <div className="links">
        <Link to="/"> Check Weather</Link>
        <Link to="/todos">Todo List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
