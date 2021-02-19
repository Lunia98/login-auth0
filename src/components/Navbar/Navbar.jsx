import React from "react";
import LogIn from "../Buttons/LogIn/LogIn";
import LogOut from "../Buttons/LogOut/LogOut";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="navbar_title">Fast breakfast!</h2>
        <LogIn />
        <LogOut />
      </nav>
    </div>
  );
}
