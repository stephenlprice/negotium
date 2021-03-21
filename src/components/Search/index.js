import React, { useContext }  from "react";
import "./style.css";
import EmployeesContext from '../../utils/EmployeesContext';

function Search() {
  const {list, search, searchChange, filter} = useContext(EmployeesContext);
  let autocomplete = [];
  // Push autocomplete suggestions into array
  if (list.length) {
    list.forEach(employee => {
      autocomplete.push(employee.name.first);
      autocomplete.push(employee.name.last);
    });
  };

  return (
    <section className="text-light bg-transparent">
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" aria-label="Search" placeholder="Employee Directory" list="directory"
          value={search} onChange={searchChange} onInput={searchChange} onKeyUp={searchChange} onReset={searchChange}></input>
          <datalist id="directory">
          {/* If the user starts typing, provide autocomplete suggestions */}
          {search.length ? (
            autocomplete.length ? (
              autocomplete.map(suggestion => (
                <option value={suggestion} key={Math.random().toString(36).substr(2, 9)}></option>
              ))
            ) : (
              <option value=""></option>
            )
          ) : (<option value=""></option>)}
          </datalist>
          <br></br>
          <button className="btn btn-dark" type="submit" onClick={filter}>Search</button>
        </form>
      </div>
    </section>
  )
}

export default Search;
