import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { sendOrder, updateStock } from "../../firebase/firebase";
import "./Form.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Form({ total, items }) {
  const { clear } = useContext(CartContext);
  const [formulario, setFormulario] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    total: total,
    items: items,
  });

  //Actualiza el countCart cada vez que se modifica
  useEffect(() => {
    setFormulario({
      ...formulario,
      items: items,
    });
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

  const validations = (e) => {
    e.preventDefault();

    if (
      formulario.buyer.email === "" ||
      formulario.buyer.name === "" ||
      formulario.buyer.phone === ""
    )
      return MySwal.fire({
        title: `Complete all the forms`,
        toast: false,
        background: "#ff8b00",
        color: "#ffff",
        position: "center",
        icon: "error",
        iconColor: "#ffff",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

    const expr1 =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr1.test(formulario.buyer.email))
      return MySwal.fire({
        title: `Error: Invalid email`,
        toast: false,
        background: "#ff8b00",
        color: "#ffff",
        position: "center",
        icon: "error",
        iconColor: "#ffff",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

    handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await sendOrder(formulario);
    if (res) {
      formulario.items.forEach((item) => {
        let stockUpdate = item.stock - item.countCart;
        updateStock(item.id, stockUpdate);
        clear();
      });
    }
    MySwal.fire({
      title: `Purchase completed! Your id of comprobant is ${res.id}`,
      toast: true,
      background: "#ff8b00",
      color: "#ffff",
      position: "center",
      icon: "success",
      iconColor: "#ffff",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    });
    setFormulario({
      ...formulario,
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
    });
  };

  return (
    <div className={`form-container${total === 0 ? "-hidden" : ""}`}>
      <h2 className="checkout-title">Checkout</h2>
      <h2 className="checkout-subtitle">Personal Data</h2>
      <form onSubmit={validations}>
        <div className="inputs">
          <div className="input-container">
            <p>Name</p>
            <input
              type="text"
              value={formulario.buyer.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <p>Email</p>
            <input
              type="text"
              value={formulario.buyer.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <p>Phone</p>
            <input
              type="number"
              value={formulario.buyer.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="checkout-button-container">
          <p className="checkout-total">
            Total: ${total.toLocaleString("en-US")}
          </p>
          <div className="checkout-button">
            <button type="submit">Proceed to checkout</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
