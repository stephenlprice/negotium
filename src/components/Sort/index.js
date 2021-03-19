import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

function Sort() {
  return (
    <section className="container bg-transparent d-none d-md-block">
      <div className="row">
        <div className="col col-md-2 d-flex justify-content-center text-center"/>
        <div className="col col-md-3 d-flex justify-content-center text-center">
          <h4><FontAwesomeIcon icon={faSort}/> Name</h4>
        </div>
        <div className="col col-md-4 d-flex justify-content-center text-center">
          <h4>Email</h4>
        </div>
        <div className="col col-md-3 d-flex justify-content-center text-center">
          <h4>Phone</h4>
        </div>
      </div>
    </section>
  )
}

export default Sort;
