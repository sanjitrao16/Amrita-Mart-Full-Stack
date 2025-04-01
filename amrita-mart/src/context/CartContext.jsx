import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(""); // Notification state

  // Function to show notifications with smooth animation
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 2000); // Hide after 2s
  };

  // Add to Cart (LIFO - Stack behavior)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return [
          { ...existingItem, quantity: existingItem.quantity + 1 },
          ...prevItems.filter((item) => item.id !== product.id),
        ];
      }
      return [{ ...product, quantity: 1 }, ...prevItems]; // New item goes on top
    });

    showNotification("Item added to cart ✅");
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    showNotification("Item removed from cart ❌");
  };

  // Calculate Total Price
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalAmount,
        notification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart
export const useCart = () => useContext(CartContext);
