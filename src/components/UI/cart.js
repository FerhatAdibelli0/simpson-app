import React from "react";
import classes from "./cart.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
};

export default Card;
