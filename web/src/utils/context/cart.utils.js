const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter(item => item.id !== itemToRemove.id);
}

const findCartItem = (cartItems, itemToAdd) => {
  return cartItems.find(item => item.id === itemToAdd.id);
}

export const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = findCartItem(cartItems, itemToAdd);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const minusCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = findCartItem(cartItems, itemToRemove);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return removeItem(cartItems, itemToRemove)
  }

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

export const removeCartItem = (cartItems, itemToRemove) => {
  return removeItem(cartItems, itemToRemove)
}
