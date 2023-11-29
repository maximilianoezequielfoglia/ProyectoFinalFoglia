import Item from "../Item/Item";

const ItemList = ({ products, title }) => {
  return (
    <>
      <h1 className="list-title">{title}</h1>
      <div className="list-container">
        <div className="item-list">
          {products.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
