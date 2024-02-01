import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./themes/GlobalStyle.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import { LogIn } from "./pages/login/LogIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <LogIn /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
