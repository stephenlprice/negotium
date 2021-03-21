import React from "react";

const EmployeesContext = React.createContext({
  list: [],
  query: [],
  sortChange: () => {}
});

export default EmployeesContext;