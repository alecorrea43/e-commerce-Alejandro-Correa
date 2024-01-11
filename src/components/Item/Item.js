import "./Item.css";
import "./Heart.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Item({ item }) {
  const [active, setActive] = useState(false);
  const { title, price, img, id } = item;
  const { addItem } = useContext(CartContext);

  let navigate = useNavigate();

  const likeClick = () => {
    active ? setActive(false) : setActive(true);
  };

  const detailsClick = (e) => {
    navigate(`/item/${id}`);
  };

  const addToCart = () => {
    addItem(item, 1);
    console.log(item.stock);
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

  //console.log(active);
  return (
    <div className="item px-10 pb-10">
      <div onClick={detailsClick} className="div-img">
        <img className="img-item" src={img} alt="img" />
      </div>

      <h2 className="pt-4 pb-3 pl-3 text-xl font-bold">{title}</h2>
      <div className="div-flex ">
        <p className="pl-3 text-xl font-bold">
          ${price.toLocaleString("en-US")}
        </p>
        <span onClick={likeClick} className={`heart-${active}`}></span>
      </div>
      <div className=" pt-2">
        {item.stock > 0 ? (
          <button onClick={addToCart} className="add-to-cart-item-button pl-3">
            Add to Cart
            <span className="material-icons">shopping_cart</span>
          </button>
        ) : (
          <button className="add-to-cart-item-button-no-stock pl-3">
            No stock
          </button>
        )}
      </div>

      <div className="pb-3">
        <button onClick={detailsClick} className="details  mt-3">
          Details
        </button>
      </div>
    </div>
  );
}

export default Item;
