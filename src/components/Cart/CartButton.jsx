import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </Button>
  );
};

export default CartButton;
