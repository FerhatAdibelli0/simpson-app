import React, { useRef, useContext } from "react";
import Card from "./UI/cart";
import MainContext from "../context";
import classes from "./form.module.css";

const Form = () => {
  const Ctx = useContext(MainContext);
  const enteredNameRef = useRef();
  const enteredImgRef = useRef();
  const enteredJobRef = useRef();
  const enteredDescRef = useRef();

  const submitHandler = () => {
    const name = enteredNameRef.current.value;
    const job = enteredJobRef.current.value;
    const avatar = enteredImgRef.current.value;
    const description = enteredDescRef.current.value;

    if (name && job && avatar && description) {
      Ctx.addHandler({ name, job, avatar, description });
    }
    return;
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" ref={enteredNameRef} />
        </div>
        <div>
          <label htmlFor="image">imageUrl</label>
          <input type="url" ref={enteredImgRef} />
        </div>
        <div>
          <label htmlFor="job">Job</label>
          <input type="text" ref={enteredJobRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" ref={enteredDescRef} />
        </div>
        <div className={classes.btnDiv}>
          <button className={classes.btn} type="submit">
            Add Item
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
