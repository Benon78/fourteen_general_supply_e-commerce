import { shopContext } from "./../Context/ShopContext";
import { useContext } from "react";
import "../CartItems/CartItems.css";

function CartProducts() {
  const {
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
  } = useContext(shopContext);
  return (
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
  );
}

export default CartProducts;
