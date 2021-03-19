import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./style.css";
import avatar from '../../assets/svg/undraw_male_avatar.svg'

function Profile() {
  return (
    <div className="profile">
        <div className="d-flex text-muted pt-3 align-items-center">
            <div className="d-inline-flex flex-grow-1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-2 d-flex justify-content-center text-center">
                            <img className="me-2 rounded" src={avatar} alt="profile pic"></img>
                        </div>
                        <div className="col-12 col-md-3 d-flex justify-content-center text-center">
                            <p>Stephen Price</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center text-center text-break">
                            <p><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:karla@startup.io?subject=Inquiry%20From%20Team%20Builder&body=Hello Karla," 
                            target="_blank" rel="noreferrer">stephen@startup.io</a></p>
                        </div>
                        <div className="col-12 col-md-3 d-flex justify-content-center text-center">
                            <p>(215)-889-9530</p>
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
