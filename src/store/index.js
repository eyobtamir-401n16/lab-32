import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categoryReducer from './categoryReducer.js';
import productReducer from './productReducer.js';
import thunk from './middleware/thunk.js';


let reducers = {
  category: categoryReducer,
  product: productReducer,

};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();