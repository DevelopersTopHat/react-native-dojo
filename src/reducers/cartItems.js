const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const cartItems = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id)
    default:
      return state;
  }
}

export default cartItems;