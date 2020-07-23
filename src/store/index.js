import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categoryReducer from './cartReducer.js';
import thunk from './middleware/thunk.js';


let reducers = {
  category: categoryReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();