import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const [cartDisabled, setCartDisabled] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setCartDisabled(true);
    } else setCartDisabled(false);
  }, [cart]);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div onClick={handleClick} className="cart-container">
      <img
        className="cart"
        src="https://raw.githubusercontent.com/MarcosOlguin/e-commerce-muebles-Olguin/main/src/recursos/carrito-de-compras%20(1).png"
        alt="img"
      />
      <p className={`circle ${cartDisabled}`}>{cart.length}</p>
    </div>
  );
}

export default CartWidget;
