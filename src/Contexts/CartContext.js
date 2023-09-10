import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { useContext } from "react";
const cartContext = createContext();

const initialState = {
  loading: false,
  cart: "",
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <cartContext.Provider value={{ ...state }}>{children}</cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};
export { CartProvider, useCartContext };
