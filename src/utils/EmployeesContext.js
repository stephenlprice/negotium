import React from "react";

const EmployeesContext = React.createContext({
  list: [],
  query: [],
  search: '',
  sortChange: () => {},
  searchChange: () => {}
});

export default EmployeesContext;