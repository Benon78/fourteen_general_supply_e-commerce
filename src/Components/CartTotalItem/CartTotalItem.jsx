import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import '../CartItems/CartItems.css'
import { shopContext } from "./../Context/ShopContext";
function CartTotalItem() {
  const [orderInstructions, setOrderInstructions] = useState("");
  const [showorder, setShowOrder] = useState(false);
  const { getTotalCartAmount } = useContext(shopContext);
  return (
    <div className="cart-product-total">
      <div className="product-total">
        <h3>Total</h3>
        <p>{getTotalCartAmount()} TZS</p>
      </div>
      <div className="product-order-instructions">
        <div className="order" onClick={() => setShowOrder(!showorder)}>
          <p>Order instructions</p>
          {showorder ? (
            <FaAngleDown className="order-icon" />
          ) : (
            <FaAngleUp className="order-icon" />
          )}
        </div>

        {showorder ? (
          <div className="order-div">
            <textarea
              name="order-text"
              id="text-area-id"
              rows="5"
              value={orderInstructions}
              onChange={(e) => setOrderInstructions(e.target.value)}
            ></textarea>
            <button>Save</button>
          </div>
        ) : null}
      </div>
      <div className="checkout-container">
        <p>
          Tax included. <Link to="/shiping-policy">Shipping</Link> calculated at
          checkout
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartTotalItem;
