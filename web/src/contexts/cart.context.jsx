import { createContext, useState } from "react";
import {
  addCartItem,
  minusCartItem,
  removeCartItem,
} from "../utils/context/cart.utils";

export const CartContext = createContext({
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  addItemToCart: () => [],
  minusItemFromCart: () => [],
  removeItemFromCart: () => [],
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("CartProvider");

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
    setTotalItems(totalItems => totalItems + 1);
    setTotalPrice(totalPrice => totalPrice + item.price);
  };

  const minusItemFromCart = (item) => {
    setCartItems(minusCartItem(cartItems, item));
    setTotalItems(totalItems => totalItems - 1);
    setTotalPrice(totalPrice => totalPrice - item.price);
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addItemToCart,
    minusItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
