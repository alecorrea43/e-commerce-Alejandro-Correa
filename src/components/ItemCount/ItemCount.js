import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, init, onAdd, onAddCart, setCount }) {
  const [contador, setContador] = useState((init = 1));
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { addItem } = useContext(CartContext);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    if (stock === 0 || contador === 0) {
      setButtonDisabled(true);
    } else setButtonDisabled(false);
  }, [stock, contador]);

  return (
    <div className="contador">
      {stock ? (
        <div className="stock-quantity">
          <div className="stock">
            <h2>Stock: {stock}</h2>
          </div>
          <div className="count-button">
            <h2>Quantity:</h2>
            <button className="rest" onClick={restar}>
              -
            </button>

            <h3>{contador}</h3>
            <button className="sum" onClick={sumar}>
              +
            </button>
          </div>
        </div>
      ) : (
        <h2 className="no-stock">No hay Stock</h2>
      )}
      <div className="button-container">
        <button
          className={`outline outline-2 m-2 button-buy  px-5`}
          onClick={() => onAdd(contador)}
          disabled={buttonDisabled}
        >
          Buy Now
        </button>
      </div>
      <div className="button-container">
        <button
          onClick={() => onAddCart(contador)}
          className={`outline outline-2 m-2 button-buy  px-5`}
          disabled={buttonDisabled}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
