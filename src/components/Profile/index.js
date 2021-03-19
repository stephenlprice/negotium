import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Profile(props) {
  return (
    <div className="profile" data-employee={props.name.first + props.name.last}>
        <div className="d-flex text-muted pt-3 align-items-center">
            <div className="d-inline-flex flex-grow-1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-2 d-flex justify-content-center text-center">
                            <img className="me-2 rounded" src={props.img} alt="profile pic"></img>
                        </div>
                        <div className="col-12 col-md-2 d-flex justify-content-center text-center">
                          <p><span className="fa-icon"><FontAwesomeIcon icon={faUser} className="d-md-none"/></span> {props.name.first} {props.name.last}</p>
                        </div>
                        <div className="col-12 col-md-5 d-flex justify-content-center text-center text-break">
                          <p><span className="fa-icon"><FontAwesomeIcon icon={faEnvelope} className="d-md-none"/></span><a href="mailto:karla@startup.io?subject=Inquiry%20From%20Team%20Builder&body=Hello Karla," 
                          target="_blank" rel="noreferrer"> {props.email}</a></p>
                        </div>
                        <div className="col-12 col-md-3 d-flex justify-content-center text-center">
                          <p><span className="fa-icon"><FontAwesomeIcon icon={faPhone} className="d-md-none"/></span> {props.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="d-md-none d-block"></hr>
    </div>
  )
}

export default Profile;
