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
    const dataFromLS = JSON.parse(localStorage.getItem("simpson"));
    if (dataFromLS) {
      setData(dataFromLS);
    } else {
      fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          localStorage.setItem("simpson", JSON.stringify(result));
          return setData(result);
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    const localData = JSON.parse(localStorage.getItem("simpson"));
    const filteredLocalData = localData.filter((item) => item.id !== id);
    console.log(filteredLocalData);
    localStorage.setItem("simpson", JSON.stringify(filteredLocalData));
  };

  return (
    <MainContext.Provider
      value={{ Data: data, addHandler, upHandler, downHandler, deleteHandler }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
