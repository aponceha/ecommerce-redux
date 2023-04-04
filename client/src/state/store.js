import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {reducer as productsReducer} from './products/productsReducer';
import {reducer as cartReducer} from './cart/cartReducer';
import {reducer as categoryReducer} from './categories/categoriesReducer';

const reducer = combineReducers({
    productsSlice: productsReducer,
    cartSlice: cartReducer,
    categoriesSlice: categoryReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
