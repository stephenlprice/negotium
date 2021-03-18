import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid d-flex justify-content-center">
          <span id="brand" className="navbar-brand mb-0 h1">NEGOTIUM</span>
      </div>
    </nav>
  )
}

export default Header;
