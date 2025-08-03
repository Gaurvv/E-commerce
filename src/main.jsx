import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Cart from "./Cart/Cart.jsx";
import MainAuth from "./Components/Authentication/MainAuth.jsx";
import Setting from "./Setting/Setting.jsx";
import Hoome from "./Hoome.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <MainAuth />,
  },
  {
    path: "/",
    element: <Hoome />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
