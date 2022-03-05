import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/UI/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const uiState = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {uiState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
