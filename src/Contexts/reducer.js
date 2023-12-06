const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "UPDATE_PRICE": {
      return {
        ...state,
        total: action.payload,
      };
    }
    case "PLUS_COUNT_PRODUCT": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "MINUS_COUNT_PRODUCT": {
      return {
        ...state,
        cart: action.payload,
      };
    }
  }
};

export { reducer, initialState };
