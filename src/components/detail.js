import React, { useContext } from "react";
import MainContext from "../context";
import Card from "./UI/cart";
import { useParams } from "react-router-dom";
import classes from "./detail.module.css";

const Detail = () => {
  const { simpsonId } = useParams();
  const Data = useContext(MainContext).Data;
  const detailedSim = Data.find((item) => item.id === simpsonId);

  return (
    <Card>
      <div className={classes.image}>
        <img src={detailedSim.avatar} alt="image" />
      </div>
      <hr />
      <h3>{detailedSim.name}</h3>
      <h4>{detailedSim.job}</h4>
      <p>{detailedSim.description}</p>
    </Card>
  );
};

export default Detail;
