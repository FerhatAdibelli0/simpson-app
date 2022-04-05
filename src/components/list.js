import React, { Fragment, useContext } from "react";
import Card from "./UI/cart";
import MainContext from "../context";
import classes from "./list.module.css";
// import { FaArrowCircleUp } from "react-icons/fa";
// import { FaArrowCircleDown } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllList = () => {
  const Data = useContext(MainContext).Data;
  const Ctx = useContext(MainContext);

  const deleteSimHandler = (event) => {
    Ctx.deleteHandler(event.target.id);
  };

  const onMoveUp = (key) => {
    Ctx.upHandler(key);
  };

  const onMoveDown = (key) => {
    Ctx.downHandler(key);
  };

  let content;
  if (Data) {
    content = (
      <Fragment>
        <h4>Simpsons</h4>
        <ol>
          {Data.map((item, key) => {
            return (
              <li key={key} className={classes.main}>
                <span className={classes.image}>
                  <img src={`${item.avatar.slice(0, -58)}`} alt="img" />
                </span>
                <Link to={`/simpson/${item.id}`}>
                  <span>{item.name}</span>
                </Link>
                <div className={classes.icons}>
                  <span
                    className={classes.btn}
                    onClick={() => {
                      onMoveUp(key);
                    }}
                  >
                    UP
                  </span>
                  <span
                    className={classes.btn}
                    onClick={() => {
                      onMoveDown(key);
                    }}
                  >
                    DOWN
                  </span>
                  <span
                    className={classes.delete}
                    id={item.id}
                    onClick={deleteSimHandler}
                  >
                    X
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
        <div className={classes.plus}>
          <Link to="/add-simpson">
            <button>Add Simpson</button>
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
