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
    const newList = [...data];
    newList.push(enteredData);
    setData(newList);
    const localData = JSON.parse(localStorage.getItem("simpson"));
    const addedLocalData = localData.concat(enteredData);
    localStorage.setItem("simpson", JSON.stringify(addedLocalData));
  };

  const upHandler = (key) => {
    if (key === 0) return;
    const items = [...data];
    const index = key - 1;
    const itemAbove = items[index];
    items[key - 1] = items[key];
    items[key] = itemAbove;
    setData(items);
    localStorage.setItem("simpson", JSON.stringify(items));
  };

  const downHandler = (key) => {
    const items = [...data];
    if (key === items.length - 1) return;
    const index = key + 1;
    const itemBelow = items[index];
    items[key + 1] = items[key];
    items[key] = itemBelow;
    setData(items);
    localStorage.setItem("simpson", JSON.stringify(items));
  };

  const deleteHandler = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    const localData = JSON.parse(localStorage.getItem("simpson"));
    const filteredLocalData = localData.filter((item) => item.id !== id);
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
