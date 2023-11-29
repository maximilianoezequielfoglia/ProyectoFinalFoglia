import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);
  const addItem = (item, quantity) => {
    const itemBuy = { ...item, quantity };
    const newCart = [...cart];
    const isInCart = newCart.find((product) => product.id === itemBuy.id);

    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(itemBuy);
    }
    setCart(newCart);
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    });
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };
  const removeItem = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((product) => product.id !== productId);
    });
  };
  const totalPurchase = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };
  const emptyCart = () => {
    setCart([]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalPurchase,
        emptyCart,
        decreaseQuantity,
        increaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
