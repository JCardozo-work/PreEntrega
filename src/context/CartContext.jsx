import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  //Si el producto ya está, suma la cantidad; si no, lo agrega
  const addToCart = (item, quantity = 1) => {
    setCart((prev) => {
      const inCart = prev.some((element) => element.id === item.id);
      if (inCart) {
        return prev.map((element) =>
          element.id === item.id
            ? { ...element, quantity: element.quantity + quantity }
            : element,
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = (id) =>
    cart.find((element) => element.id === id)?.quantity ?? 0;

  //Cantidad total de unidades (lo muestra el CartWidget)
  const getTotalItems = () =>
    cart.reduce((acc, element) => acc + element.quantity, 0);

  const getCartTotal = () =>
    cart.reduce((acc, element) => acc + element.price * element.quantity, 0);

  const checkout = () => {
    alert("¡Gracias por tu compra! 🎣");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    getQuantity,
    getTotalItems,
    getCartTotal,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
