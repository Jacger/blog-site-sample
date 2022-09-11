import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  setIsCartOpen: () => null,
  addItemToCart: () => []
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
    setTotalItems(totalItems);
  }, [cartItems])

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const value = {
    isCartOpen,
    cartItems,
    totalItems,
    setIsCartOpen,
    addItemToCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
