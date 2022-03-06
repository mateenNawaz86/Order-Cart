import React from "react";
import Card from "../Card";
import Button from "../Button";

import classes from "./ProductItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    // update the quantity without changing the redux store state
    const newTotalQuantity = cart.totalQuantity + 1;

    // create copy of existing objects via slice to avoid mutation
    const updateItems = cart.items.slice(); // slice() is used to create a brand new array
    const existingItem = updateItems.find((item) => item.id === id);
    if (existingItem) {
      // new Object + exisiting copy properties
      const updateItem = { ...existingItem }; // copy existing objects new object with spread operator & update the values
      updateItem.quantity++;

      updateItem.totalPrice = updateItem.totalPrice + price;

      // find the index of the existing item
      const existingItemIndex = updateItems.findIndex((item) => item.id === id);

      //update the items array with existing and new item
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems.push({
        id: id,
        title: title,
        price: price,
        quantity: 1,
        totalPrice: price,
      });
    }

    // create new Object for newCart
    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updateItems,
    };

    dispatch(cartActions.replaceCart(newCart));

    // dispatch(
    //   cartActions.addItemToCart({
    //     id,
    //     title,
    //     price,
    //   })
    // );
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
