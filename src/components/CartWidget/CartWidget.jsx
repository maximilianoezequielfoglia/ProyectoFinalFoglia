import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartView from "../CartView/CartView";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link className="cart-widget" to="/cart">
      <img src="../src/assets/cart.svg" />
      {cart.length > 0 ? <CartView /> : null}
    </Link>
  );
};

export default CartWidget;
