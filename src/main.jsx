import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Cart from './Cart/Cart.jsx';
import MainAuth from './Components/Authentication/MainAuth.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
  {
    path: "auth",
    element: <MainAuth />,
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
