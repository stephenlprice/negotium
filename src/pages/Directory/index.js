import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";
import ListContainer from "../../components/ListContainer";

function Directory() {
  document.title = "NEGOTIUM";

  let [list, setList] = useState({});

  useEffect(() => {
    // if (!list) {
    //   return;
    // }

    API.getList()
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Header/>
      <ListContainer/>
    </div>
  )
};

export default Directory;
