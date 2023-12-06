import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const updateCart = state.cart;
    updateCart.push(product);
    updatePrice(updateCart);
    dispatch({ type: "ADD_TO_CART", payload: updateCart });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (productID) => {
    const updateCart = state.cart.filter(
      (currentProduct) => currentProduct.id !== productID
    );

    updatePrice(updateCart);
    dispatch({ type: "REMOVE", payload: updateCart });
  };

  const plusCountProduct = (productId) => {
    let newProductCount = state.cart.find(
      (product) => product.id === productId
    );

    newProductCount.count += 1;

    updatePrice(state.cart);

    dispatch({ type: "PLUS_COUNT_PRODUCT", payload: state.cart });
  };
  const minusCountProduct = (productId) => {
    let newProductCount = state.cart.find(
      (product) => product.id === productId
    );
    if (newProductCount.count >= 2) {
      newProductCount.count -= 1;
    }
    
    updatePrice(state.cart);
    dispatch({ type: "MINUS_COUNT_PRODUCT", payload: state.cart });
  };

  const updatePrice = (cart) => {
    let total = 0;

    cart.forEach((product) => {
      total +=
        (product.price - (product.price * product.off) / 100) * product.count;
    });

    dispatch({ type: "UPDATE_PRICE", payload: total });
  };
  const value = {
    total: state.total,
    cart: state.cart,
    addToCart,
    remove,
    plusCountProduct,
    minusCountProduct,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
