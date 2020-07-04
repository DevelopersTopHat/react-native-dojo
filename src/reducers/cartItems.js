import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    // TODO: return a new state that has the old items, and includes the item in the payload
    case ADD_TO_CART:
      return [...state, action.payload];
    // TODO: find the item that needs to be removed by checking their IDs
    // Check that the item you are trying to remove exists in the cart and remove it if it does  
    case REMOVE_FROM_CART:
      const itemIndexToRemove = state.findIndex(cartItem => cartItem.id === action.payload.id);
      // this is bad practice, you should not have boolean logic in your reducer
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
