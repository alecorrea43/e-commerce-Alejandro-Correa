import { useEffect } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;
