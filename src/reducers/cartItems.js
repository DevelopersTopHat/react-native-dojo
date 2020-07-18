import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // TODO: return a new state that has the old items, and includes the item in the payload
      return state;
    case REMOVE_FROM_CART:
      // TODO: find the item that needs to be removed by checking their IDs (the ids are generated in the ProductCatalog.js)
      // Check that the item you are trying to remove exists in the cart and remove it if it does 
      // The best practice for Redux is to not add logic to the reducer, however for simplicity you can do that this time 
      
      return state;
    default:
      return state;
    }
};

export default cartItems;
