const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "ADD_TO_CART":{
        return {
            ...state,
            cart :[action.payload]
        }
    }
  }
};

export default reducer;
