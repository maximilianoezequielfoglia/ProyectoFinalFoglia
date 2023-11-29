import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <article className="item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link className="button" to={`/item/${product.id}`}>
        Detalle
      </Link>
    </article>
  );
};

export default Item;
