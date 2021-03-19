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

  const handleSort = (direction) => {
    if (direction === 'asc') {
      _.orderBy(list, 'asc');
    }
    else if (direction === 'desc') {
      _.orderBy(list, 'desc');
    }
  };

  useEffect(() => {
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
  }, []);

  handleSort();

  return (
    <div>
      <EmployeesContext.Provider value={{list, query, handleSort}}>
        <Header/>
        <ListContainer/>
      </EmployeesContext.Provider>
    </div>
  )
};

export default Directory;
