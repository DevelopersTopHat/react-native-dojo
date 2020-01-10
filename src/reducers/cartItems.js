import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const itemIndex = state.findIndex(cartItem => cartItem.id === action.payload.id);
      state.splice(itemIndex, 1);
      const updatedState = Object.assign([], state);
      return updatedState;
    }
    return state;
};



export default cartItems;
