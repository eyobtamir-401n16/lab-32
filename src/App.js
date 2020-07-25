import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Categories from './components/categories.js'
import Product from './components/products.js'
import Header from './components/header'

function App() {
  return (

    <Provider store={store}>
     <Header />
     <Categories />
     <Product />
    </Provider>
  );
}

export default App;
