const ItemCount = ({ quantity, handleDecrease, handleIncrease, handleBuy }) => {
  return (
    <div className="item-count">
      <button className="counter-button" onClick={handleDecrease}>
        -
      </button>
      <p className="item-quantity">{quantity}</p>
      <button className="counter-button" onClick={handleIncrease}>
        +
      </button>
      <button className="buy-button" onClick={handleBuy}>
        Buy!
      </button>
    </div>
  );
};

export default ItemCount;
