import { createContext, useState, useEffect } from "react";
import {
  addCartItem,
  minusCartItem,
  removeCartItem,
} from '../utils/context/cart.utils';

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  setIsCartOpen: () => null,
  addItemToCart: () => [],
  minusItemFromCart: () => [],
  removeItemFromCart: () => [],
  totalPrice: () => []
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalItems(totalItems);
    setTotalPrice(totalPrice);
  }, [cartItems])

  const addItemToCart = item => {
    setCartItems(addCartItem(cartItems, item));
  };

  const minusItemFromCart = item => {
    setCartItems(minusCartItem(cartItems, item));
  };

  const removeItemFromCart = item => {
    setCartItems(removeCartItem(cartItems, item));
  }

  const value = {
    isCartOpen,
    cartItems,
    totalItems,
    setIsCartOpen,
    addItemToCart,
    minusItemFromCart,
    removeItemFromCart,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
