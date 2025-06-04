import { createContext, useState } from "react";
import { all_products } from './../../assets/data';
import { getProduct } from "../utils/Helper";


const getDefaultCart = () =>{
    let cart = {}
    for (let index = 0; index < 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const shopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItem((prevItem) =>({
            ...prevItem,
            [itemId]:prevItem[itemId] + 1,
        }))
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prevItem) =>({
            ...prevItem,
            [itemId]:prevItem[itemId] - 1,
        }))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
               let product = getProduct(item);
               totalAmount += product.newPrice * cartItem[item];
            }
        }

        return totalAmount;
    }

    const getTotalCartItem = ()=>{
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
            all_products,
            getTotalCartAmount,
            getTotalCartItem,
            cartItem,
            addToCart,
            removeFromCart,
    }
    return (
        <shopContext.Provider value={contextValue} >
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider