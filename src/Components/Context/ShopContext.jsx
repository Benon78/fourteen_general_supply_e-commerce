import { createContext, useState } from "react";
import { all_products } from "./../../assets/data";
import { getProduct } from "../utils/Helper";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [recentView, setRecentView] = useState([]);

  const addToCart = (itemId) => {
    setCartItem((prevItem) => ({
      ...prevItem,
      [itemId]: prevItem[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prevItem) => ({
      ...prevItem,
      [itemId]: prevItem[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let product = getProduct(item);
        totalAmount += product.newPrice * cartItem[item];
      }
    }

    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const getRecentViewed = (itemId) => {
    let product = getProduct(itemId);
    let exists = recentView.some((p) => p.id === product.id);
    if (!exists) {
      setRecentView((prev) => [...prev, product]);
    }
  };

  const contextValue = {
    all_products,
    getTotalCartAmount,
    getTotalCartItem,
    cartItem,
    addToCart,
    removeFromCart,
    getRecentViewed,
    recentView,
  };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
