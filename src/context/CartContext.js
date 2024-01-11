import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const total = cart.reduce(
    (acc, current) => acc + current.price * current.countCart,
    0
  );

  const addItem = (item, countCart) => {
    let itemID = { ...item, countCart };
    let itemInCart = cart.some((e) => e.id === itemID.id);

    !itemInCart
      ? setCart([...cart, itemID])
      : setCart(
          cart.map((cartItem) =>
            cartItem.id === itemID.id
              ? { ...cartItem, countCart: cartItem.countCart + countCart }
              : cartItem
          )
        );
  };

  const removeItem = (id) => {
    setCart(cart.filter((itemCart) => itemCart.id !== id));
  };

  const clear = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    let inCart = cart.some((item) => item.id === id);
    return inCart;
  };

  const sum = (e) => {
    if (e.stock > e.countCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === e.id
            ? { ...cartItem, countCart: cartItem.countCart + 1 }
            : cartItem
        )
      );
    }
  };

  const rest = (e) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === e.id
          ? { ...cartItem, countCart: cartItem.countCart - 1 }
          : cartItem
      )
    );
    if (e.countCart < 2) {
      removeItem(e.id);
    }
  };

  let data = {
    addItem,
    removeItem,
    clear,
    isInCart,
    cart,
    setCart,
    total,
    sum,
    rest,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
