import React from "react";
import "./style.css";
import Profile from "../Profile/";
import Sort from "../Sort/";

function List() {
  return (
    <div className="container">
      <div className="row">
        <div id="engineers" className="employee col-12">
          <section  className="container rounded shadow-lg my-3 p-3">
            <Sort/>
            <hr></hr>
            <Profile/>
          </section>
        </div>
      </div>
    </div>
  )
}

export default List;
