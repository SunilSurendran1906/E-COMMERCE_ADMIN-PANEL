import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/nav-logo.svg";
import navprofileIcon from "../Assets/profile_image1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="" />
      <img src={navprofileIcon} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
