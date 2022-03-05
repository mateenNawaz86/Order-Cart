import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

// Dummy products array
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Burger",
    price: 4,
    description: "Wow! Burger is so delicus.",
  },
  {
    id: 2,
    title: "Pizaa",
    price: 7,
    description: "Pizza is so yummy.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
