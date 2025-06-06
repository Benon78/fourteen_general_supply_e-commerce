import { useContext} from "react";
import "./CartItems.css";
import { shopContext } from "./../Context/ShopContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartTotalItem from "../CartTotalItem/CartTotalItem";
import CartProducts from "../CartProducts/CartProducts";

const CartItems = () => {
  const {
    getTotalCartItem,
  } = useContext(shopContext);

  return (
    <div className="cart-items">
      {getTotalCartItem() && getTotalCartItem() > 0 ? (
        <>
          <CartProducts/>
          <CartTotalItem/>
        </>
      ) : (
        <CartEmpty/>
      )
      
      }
    </div>
  );
};

export default CartItems;
