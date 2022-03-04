import React from "react";
import Button from "../UI/Button";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <Button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </Button>
  );
};

export default CartButton;
