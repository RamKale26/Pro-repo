import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // simple push (can handle qty later)
  };

  // remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>


  );
};

// Custom hook
export const useCart = () => useContext(CartContext);
    