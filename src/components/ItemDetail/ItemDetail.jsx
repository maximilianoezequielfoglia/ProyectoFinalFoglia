import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ItemCount from "../ItemCount/ItemCount";

const MySwal = withReactContent(Swal);

const ItemDetail = ({ item }) => {
  const { addItem, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    quantity < item.stock && setQuantity(quantity + 1);
  };
  return (
    <article className="item-detail">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <ItemCount
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        const
        handleBuy={() => {
          const productInCart = cart.find((product) => product.id === item.id);
          if (productInCart) {
            const totalQuantity = productInCart.quantity + quantity;
            if (totalQuantity <= item.stock) {
              addItem(item, quantity);
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                color: "antiquewhite",
                background: "blueviolet",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
              Toast.fire({
                title: `Agregaste ${item.name} al carrito!`,
              });
            }
          } else {
            if (quantity <= item.stock) {
              addItem(item, quantity);
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                color: "antiquewhite",
                background: "blueviolet",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
              Toast.fire({
                title: `Agregaste ${item.name} al carrito!`,
              });
            }
          }
        }}
      />
    </article>
  );
};

export default ItemDetail;
