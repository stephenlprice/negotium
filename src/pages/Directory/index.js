import React, { useState, useEffect } from "react";
import _ from "lodash";
import API from "../../utils/API";
import Header from "../../components/Header";
import ListContainer from "../../components/ListContainer";
import EmployeesContext from "../../utils/EmployeesContext";

function Directory() {
  document.title = "NEGOTIUM";
  const [list, setListState] = useState([]);
  const [query, setQueryState] = useState([]);
  const [sort, setSortState] = useState('asc');
  const [search, setSearchState] = useState('');

  // Make an API call on page load
  useEffect(() => {
    loadDirectory();
  },[]);

  // Loads the page with API data - useEffect() function available for any onload events
  const loadDirectory = () => {
    API.getList()
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setListState(res.data.results);
        setQueryState(res.data.results);
      })
      .catch(err => console.log(err));
  };

  // Passed to button to change sort status
  const sortChange = () => {
    setSortState(sort === 'asc' ? 'desc' : 'asc');
    handleSort(sort);
  };

  // Sorts the list on input from sort
  const handleSort = (direction) => {
    if (direction === 'asc') {
      setListState(_.orderBy(list, ['email'], ['asc']));
    }
    else if (direction === 'desc') {
      setListState(_.orderBy(list, ['email'], ['desc']));
    }
  };

  // Passed to search bar to handle user inputs
  const searchChange = (event) => {
    const {value} = event.target
    setSearchState(value);
  };

  const filter = (event) => {
    event.preventDefault();
    setListState(_.filter(list, (person) => {
      return person.name.first === search;
    }));
    console.log('filter me!:', search, list);
  };
  
  return (
    <div>
      <EmployeesContext.Provider value={{list, query, search, sortChange, searchChange, filter}}>
        <Header/>
        <ListContainer/>
      </EmployeesContext.Provider>
    </div>
  )
};

export default Directory;
