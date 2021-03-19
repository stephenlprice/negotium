import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <span id="brand" className="navbar-brand d-flex mb-0 h1 text-center">NEGOTIUM</span>
          </div>
          <div className="col-12 d-flex justify-content-center text-light text-center">
            <h3>Employee Directory</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
