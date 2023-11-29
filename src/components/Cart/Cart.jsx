import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    totalPurchase,
    emptyCart,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  } = useContext(CartContext);
  const handleEmptyCart = () => {
    emptyCart();
  };
  const handleDecreaseQuantity = (productId) => {
    const product = cart.find((product) => product.id === productId);
    if (product.quantity > 1) {
      decreaseQuantity(productId);
    }
  };
  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((product) => product.id === productId);
    if (product.quantity < product.stock) {
      increaseQuantity(productId);
    }
  };
  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };
  return (
    <>
      <>
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.image} />
            <h2>{product.name}</h2>
            <button
              className="counter-button"
              onClick={() => handleDecreaseQuantity(product.id)}
            >
              -
            </button>
            <p className="item-quantity">{product.quantity}</p>
            <button
              className="counter-button"
              onClick={() => handleIncreaseQuantity(product.id)}
            >
              +
            </button>
            <p className="item-price">${product.price * product.quantity}</p>
            <button
              className="delete-button"
              onClick={() => handleRemoveItem(product.id)}
            >
              x
            </button>
          </div>
        ))}
      </>
      {cart.length > 0 ? (
        <div className="cart-total">
          <h3>Total a pagar:</h3>
          <h2>${totalPurchase()}</h2>
          <button className="cart-empty-button" onClick={handleEmptyCart}>
            Vaciar carrito
          </button>
          <Link className="checkout-button" to="/checkout">
            Realizar pedido
          </Link>
        </div>
      ) : (
        <h2 className="cart-empty">¡Tu carrito está vacío!</h2>
      )}
    </>
  );
};

export default Cart;
