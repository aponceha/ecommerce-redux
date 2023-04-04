import { createStore, combineReducers } from 'redux';
import {reducer as productsReducer} from './products/productsReducer';
import {reducer as cartReducer} from './cart/cartReducer';
import {reducer as categoryReducer} from './categories/categoriesReducer';

const reducer = combineReducers({
    productsSlice: productsReducer,
    cartSlice: cartReducer,
    categoriesSlice: categoryReducer,
});

let store;
if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    store = createStore(reducer, composeWithDevTools());
} else {
    store = createStore(reducer, null);
}

export default store;
