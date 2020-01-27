import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const itemIndexToRemove = state.findIndex(cartItem => cartItem.id === action.payload.id);
      // this is bad practice, you should not have conditional logic in your reducer, instead use redux thunk or middleware
      if (itemIndexToRemove !== -1) {
        const resultArray = [...state.slice(0, itemIndexToRemove), ...state.slice(itemIndexToRemove + 1)];
        state = resultArray;
      } 
      return state;
    default:
      return state;
    }
};



export default cartItems;
