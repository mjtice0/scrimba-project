import React from "react";
import airbnbLogo from "./../images/airbnbLogo.png";

export default function Navbar() {
  return (
  <nav>
    {/* <img src="../images/airbnb-logo.png" alt = "alt text" /> */}
    <img src={airbnbLogo} alt="An of tickets" className = "nav--logo"/>
  </nav>
  )
}
