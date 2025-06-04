import { useContext, useState } from "react";
import "./CartItems.css";
import { shopContext } from "./../Context/ShopContext";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartEmpty from "../CartEmpty/CartEmpty";

const CartItems = () => {
  const {
    all_products,
    getTotalCartAmount,
    getTotalCartItem,
    cartItem,
    addToCart,
    removeFromCart,
  } = useContext(shopContext);

  const [orderInstructions, setOrderInstructions] = useState("");
  const [showorder, setShowOrder] = useState(false);

  return (
    <div className="cart-items">
      {getTotalCartItem() && getTotalCartItem() > 0 ? (
        <>
          <div className="cart-products">
            <div className="cart-products-header">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {all_products.map((item) => {
              if (cartItem[item.id] > 0) {
                return (
                  <div key={item.id} className="cart-products-content">
                    <div className="cart-product-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-product-item-details">
                        <p>{item.name}</p>
                        <p>{item.newPrice} TZS</p>
                      </div>
                    </div>
                    <div className="cart-product-item-count">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <button>{cartItem[item.id]}</button>
                      <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                    <div className="cart-product-item-total">
                      <p>{item.newPrice * cartItem[item.id]} TZS</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
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
                Tax included. <Link to="/shipping">Shipping</Link> calculated at
                checkout
              </p>
              <button>Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <CartEmpty/>
      )
      
      }
    </div>
  );
};

export default CartItems;
