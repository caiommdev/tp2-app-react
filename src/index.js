import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './Products';
import OneProduct from './OneProduct';
import Users from './Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <OneProduct />
    <Products />
    <Users />
  </React.StrictMode>
);
