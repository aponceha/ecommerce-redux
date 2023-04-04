import {
    UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY
  } from './categoriesActions';
  
  const initialState = {    
    categories: [],
    currentCategory: ''
  };
  
  // TODO: To get a better understand of how a reducer works - add comments to the various actions in the reducer
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
              ...state,
              categories: [...action.categories],
            };
      
          case UPDATE_CURRENT_CATEGORY:
            return {
              ...state,
              currentCategory: action.currentCategory,
            };
      default:
        return state;
    }
  };