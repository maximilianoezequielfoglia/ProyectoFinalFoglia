import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartView = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  return <span className="total-items">{totalItems}</span>;
};

export default CartView;
