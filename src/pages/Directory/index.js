import React, { useState, useEffect } from "react";
import _ from "lodash";
import API from "../../utils/API";
import Header from "../../components/Header";
import ListContainer from "../../components/ListContainer";
import EmployeesContext from "../../utils/EmployeesContext";

function Directory() {
  document.title = "NEGOTIUM";
  const [list, setList] = useState({});

  useEffect(() => {
    API.getList()
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log('setList(): ', res.data.results);
        setList(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <EmployeesContext.Provider value={list}>
        <Header/>
        <ListContainer employees={list}/>
      </EmployeesContext.Provider>
    </div>
  )
};

export default Directory;
