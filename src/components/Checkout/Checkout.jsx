import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import "./Checkout.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPurchase, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const send = (data) => {
    const order = {
      buyer: data,
      products: cart,
      total: totalPurchase(),
    };
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };
  if (orderId) {
    return (
      <div className="checkout-end-container">
        <h4>Finalizaste tu compra!</h4>
        <h4>Tu código de orden es:</h4>
        <h4>{orderId}</h4>
      </div>
    );
  }
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(send)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu teléfono"
          {...register("phone")}
        />
        <button type="submit" className="form_cta">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
