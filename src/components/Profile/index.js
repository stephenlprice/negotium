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
                      <div className="col-12 col-md-2 col-lg-2 col-xl-1 d-flex justify-content-center">
                          <img className="me-2 rounded" src={avatar} alt="profile pic"></img>
                      </div>
                      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                          <div className="row d-flex align-items-center">
                              <div className="col-12 col-sm">
                                  <p>Stephen Price</p>
                              </div>
                              <div className="col-12 col-sm">
                                <p><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:karla@startup.io?subject=Inquiry%20From%20Team%20Builder&body=Hello Karla," 
                                target="_blank" rel="noreferrer">karla@startup.io</a></p>
                              </div>
                              <div className="col-12 col-sm">
                                  <p>(215)-889-9530</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-0 col-md-2 col-lg-4 col-xl-6"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Profile;
