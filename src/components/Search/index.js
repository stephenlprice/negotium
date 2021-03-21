import React, { useContext }  from "react";
import "./style.css";
import EmployeesContext from '../../utils/EmployeesContext';

function Search() {
  const {search, searchChange} = useContext(EmployeesContext);
  return (
    <section className="text-light bg-transparent">
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" aria-label="Search" placeholder="Employee Directory" 
          value={search} onChange={searchChange}></input>
          <br></br>
          <button className="btn btn-dark" type="submit">Search</button>
          {/* <button className="btn btn-dark" type="submit" onClick={searchChange}>Search</button> */}
        </form>
      </div>
    </section>
  )
}

export default Search;
