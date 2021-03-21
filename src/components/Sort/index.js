import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "./style.css";
import EmployeesContext from '../../utils/EmployeesContext';

function Sort() {
  const {sortChange} = useContext(EmployeesContext);
  return (
    <section className="container bg-transparent">
      <div className="row">
        <div className="col col-md-2 d-none d-md-block"/>
        <div className="col col-md-2 d-flex justify-content-center text-center">
          <h4 id='sort'><FontAwesomeIcon icon={faSort} onClick={sortChange}/></h4>
        </div>
        <div className="col col-md-5 d-none d-md-block text-center">
          <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
        </div>
        <div className="col col-md-3 d-none d-md-block text-center">
          <h4><FontAwesomeIcon icon={faPhone}/></h4>
        </div>
      </div>
    </section>
  )
}

export default Sort;
