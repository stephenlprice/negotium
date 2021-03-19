import React, { useState, useEffect } from "react";
import "./style.css";
import Profile from "../Profile/";
import Sort from "../Sort/";

function List(props) {
  console.log('List props', props);
  const employees = props.employees;

  return (
    <div className="container">
      <div className="row">
        <div id="engineers" className="employee col-12">
          <section  className="container rounded shadow-lg my-3 p-3">
            <Sort/>
            <hr className="d-none d-md-block"></hr>
            {employees.length ? (
              employees.map(employee => (
                <section key={Math.random().toString(36).substr(2, 9)}>
                  <Profile name={employee.name} img={employee.picture.medium} email={employee.email} phone={employee.phone}/>
                </section>
              ))
            ) : (
              <div></div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default List;
