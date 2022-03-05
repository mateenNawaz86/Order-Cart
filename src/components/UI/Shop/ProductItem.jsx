import React from "react";
import Card from "../Card";
import Button from "../Button";

import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <Button onClick={addItemHandler}>Add to Cart</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
