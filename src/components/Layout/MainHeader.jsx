import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>
          <h2>Cart</h2>
        </div>

        <div className={classes.logOut}>
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
