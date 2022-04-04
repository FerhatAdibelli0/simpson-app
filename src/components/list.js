import React, { Fragment, useContext } from "react";
import Card from "./UI/cart";
import MainContext from "../context";
import classes from "./list.module.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllList = () => {
  const Data = useContext(MainContext).Data;
  const Ctx = useContext(MainContext);

  const deleteSimHandler = (event) => {
    console.log(event.target.id);
    Ctx.deleteHandler(event.target.id);
  };

  let content;
  if (Data) {
    content = (
      <Fragment>
        <h4>Simpsons</h4>
        <ol>
          {Data.map((item) => {
            return (
              <li key={item.id} className={classes.main}>
                <span className={classes.image}>
                  <img src={item.avatar} alt="img" />
                </span>
                <Link to={`/simpson/${item.id}`}>
                  <span>{item.name}</span>
                </Link>
                <div className={classes.icons}>
                  <span>
                    <FaArrowCircleUp />
                  </span>
                  <span>
                    <FaArrowCircleDown />
                  </span>
                  <span className={classes.delete} onClick={deleteSimHandler}>
                    <FaTrashAlt />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
        <div className={classes.plus}>
          <Link to="/add-simpson">
            <button>
              Add
            </button>
          </Link>
        </div>
      </Fragment>
    );
  } else {
    content = <p>Data is not found</p>;
  }
  return <Card>{content}</Card>;
};

export default AllList;
