import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ItemDetailCointainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import { UseModal } from "../hooks/useModal";
import CartPage from "../pages/CartPage";

import Home from "../pages/Home";

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="item/:id" element={<ItemDetailCointainer />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default Rutas;
