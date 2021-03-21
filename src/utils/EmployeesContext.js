import React from "react";

const EmployeesContext = React.createContext({
  list: [],
  query: [],
  search: '',
  sortChange: () => {},
  searchChange: () => {},
  filter: () => {}
});

export default EmployeesContext;