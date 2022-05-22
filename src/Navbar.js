import React, { useEffect, useState } from "react";
import "./Navbar.css";
import image from "./image/Netflix-Logo.wine.svg";

function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${handleShow && "nav_black"}`}>
      <img className="nav_logo" src={image} alt="Netflix" />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/474x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg"
        alt="Member-ship"
      />
    </div>
  );
}

export default Navbar;
