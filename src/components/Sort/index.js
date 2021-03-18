import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

function Sort() {
  return (
    <section className="container bg-transparent">
      <div className="row">
        <div className="col-2"/>
        <div className="col">
          <h4><FontAwesomeIcon icon={faSort}/> Name</h4>
        </div>
        <div className="col">
          <h4>Email</h4>
        </div>
        <div className="col">
          <h4>Phone</h4>
        </div>
      </div>
    </section>
  )
}

export default Sort;
