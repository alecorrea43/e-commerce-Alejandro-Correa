import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function CartPage() {
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2 " }}>
        <NavBar />
        <Cart />
        <Footer />
      </div>
    </>
  );
}

export default CartPage;
