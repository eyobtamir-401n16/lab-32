import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Categories from './components/categories.js'
import Header from './components/header'

function App() {
  return (

    <Provider store={store}>
     <Header />
     <Categories />
    </Provider>
  );
}

export default App;
