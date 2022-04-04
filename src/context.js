import React, { useState, useEffect } from "react";

const MainContext = React.createContext({
  Data: [],
  upHandler: (id) => {},
  downHandler: (id) => {},
  addHandler: (enteredData) => {},
  deleteHandler: (id) => {},
});

export default MainContext;

export const MainContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        return setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  localStorage.setItem("fetchedData", data);

  const addHandler = (enteredData) => {
    console.log(enteredData);
  };

  const upHandler = (id) => {
    console.log(id);
    // localStorage.removeItem("enteredData");
  };

  const downHandler = (id) => {
    console.log(id);
  };

  const deleteHandler = (id) => {
    console.log(id);
  };

  return (
    <MainContext.Provider
      value={{ Data: data, addHandler, upHandler, downHandler, deleteHandler }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

//   useEffect(() => {
//     const setedItemInLocalStorage = localStorage.getItem("enteredData");
//     if (setedItemInLocalStorage === "1") {

//     }
//   }, []);
