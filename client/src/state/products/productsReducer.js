import {
  UPDATE_PRODUCTS,
} from './productActions';

const initialState = {
  products: []
};

// TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    default:
      return state;
  }
};
