import React from "react";
import List from "../List/";

function ListContainer(props) {
  console.log('ListContainer props', props);
  return (
    <main className="container">
      <List {... props}/>
    </main>
  )
}

export default ListContainer;
