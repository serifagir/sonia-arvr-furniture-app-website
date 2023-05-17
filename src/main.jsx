import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ProductOne from './products/ProductOne.jsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/productid1',
    element: <ProductOne/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
