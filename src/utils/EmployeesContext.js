import React from "react";

const EmployeesContext = React.createContext({
  list: [],
  query: [],
  handleSort: () => {}
});

export default EmployeesContext;