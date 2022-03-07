import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// action for fetch data from firebase
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cart-data-26c5d-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetch cart data is failed!");
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data is failed!",
        })
      );
    }
  };
};

// action for send cart data to firebase
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // show pending notification when cart data send to the firebase
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    // function for send request to firebase and get response
    const sendRequest = async () => {
      // send response to the firebase
      const response = await fetch(
        "https://cart-data-26c5d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data is failed!");
      }
    };

    try {
      await sendRequest();
      // show success notification when data is successfully sent
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data is failed!",
        })
      );
    }
  };
};
