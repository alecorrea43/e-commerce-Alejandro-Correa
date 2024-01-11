import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer/Footer";

const MySwal = withReactContent(Swal);

function ItemDetail({ item }) {
  const { id, title, price, img, stock, description } = item;
  const [countCart, setCountCart] = useState(false);
  const [onCart, setonCart] = useState();
  const { addItem, removeItem, clear, isInCart } = useContext(CartContext);

  let navigate = useNavigate();

  useEffect(() => {
    const res = isInCart(id);
    if (res) {
      setCountCart(true);
    }
  }, [item]);

  const onAdd = (count) => {
    addItem(item, count);
    setCountCart(true);
    navigate("/cart");
  };

  const onAddCart = (count) => {
    console.log(countCart);
    setCountCart(true);
    addItem(item, count);
    MySwal.fire({
      title: "Added to cart!",
      toast: true,
      background: "#ff8b00",
      color: "#ffff",
      position: "top-end",
      icon: "success",
      iconColor: "#ffff",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="asd">
        <div className="item-container">
          <div className="item-detail-img">
            <img src={img} />
          </div>

          <div className="detail-container">
            <div className="detail-title">
              <h2>{title}</h2>
            </div>
            <div className="stars"></div>
            <div className="detail-price">
              <h2>${price}</h2>
              <span>See payment methods</span>
            </div>
          </div>
          <div className={`add-cart-buy`}>
            {countCart ? (
              <div>
                <div className="pb-4">
                  You already have this product in the cart
                </div>
                <button className={`go-to-cart`} onClick={goToCart}>
                  Go to cart
                </button>
              </div>
            ) : (
              <ItemCount stock={stock} onAdd={onAdd} onAddCart={onAddCart} />
            )}
          </div>
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ItemDetail;
