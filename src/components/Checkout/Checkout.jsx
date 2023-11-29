import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import "./Checkout.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPurchase, emptyCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const validate = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Este campo es obligatorio";
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      errors.name = "Ingresa un nombre válido";
    }

    if (!data.email) {
      errors.email = "Este campo es obligatorio";
    }

    if (!data.phone) {
      errors.phone = "Este campo es obligatorio";
    } else if (!/^[0-9]+$/.test(data.phone)) {
      errors.phone = "Ingresa un número de teléfono válido";
    }

    return errors;
  };

  const send = (data) => {
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const order = {
      buyer: data,
      products: cart,
      total: totalPurchase(),
    };

    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order)
      .then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  if (orderId) {
    return (
      <div className="checkout-end-container">
        <h4>¡Finalizaste tu compra!</h4>
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
        {errors.name && <p>{errors.name.message}</p>}

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
        {errors.phone && <p>{errors.phone.message}</p>}

        <button type="submit" className="form_cta">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
