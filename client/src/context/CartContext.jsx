import { createContext, useContext, useState } from "react";
import { useConfirmContext } from "./ConfirmContext";

const CartContext = createContext();
const { toggleConfirm } = useConfirmContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  const env = import.meta.env;

  async function saveToDatabase() {
    try {
      const response = await fetch(env.VITE_API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            itemPrice: item.quantity * item.price,
          })),
          totalCartValue: cart.reduce(
            (sum, item) => sum + item.quantity * item.price,
            0,
          ),
        }),
      });

      if (response.ok) {
        console.log("Order submitted successfully");
        toggleConfirm();
      } else {
        console.error("Submission error:", result.message);
        alert("Failed to submit Order. Please try again.");
      }
    } catch (err) {
      console.error("Server error:", err);
      alert("Server error. Please try again later.");
    }
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
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        dropFromCart,
        resetCart,
        saveToDatabase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const {
    cart,
    addToCart,
    increment,
    decrement,
    resetCart,
    dropFromCart,
    saveToDatabase,
  } = useContext(CartContext);

  return {
    cart,
    addToCart,
    increment,
    decrement,
    dropFromCart,
    resetCart,
    saveToDatabase,
  };
}
