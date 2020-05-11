import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    default:
      return state;
    }
};

export default cartItems;
