import React from "react";
import "./style.css";

function Search() {
  return (
    <section className="text-light bg-transparent">
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Employee Directory" aria-label="Search"></input>
          <br></br>
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </section>
  )
}

export default Search;
