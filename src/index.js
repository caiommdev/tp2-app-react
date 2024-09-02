import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './Products';
import OneProduct from './OneProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <OneProduct />
    <Products />
  </React.StrictMode>
);
