import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ProductsContextProvider from './context/ProductsContext';

import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';

ReactDOM.render(
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>, 
  document.getElementById('root')
)
