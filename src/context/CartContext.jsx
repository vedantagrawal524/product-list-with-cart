import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function increment(productId) {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrement(productId) {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }

  function dropFromCart(productId) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, dropFromCart, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const { cart, addToCart, increment, decrement, resetCart, dropFromCart } =
    useContext(CartContext);

  return { cart, addToCart, increment, decrement, dropFromCart, resetCart };
}
