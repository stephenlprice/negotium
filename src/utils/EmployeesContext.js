import React from "react";

const EmployeesContext = React.createContext({
  list: [],
  query: [],
  sortChange: () => {},
  filter: () => {}
});

export default EmployeesContext;