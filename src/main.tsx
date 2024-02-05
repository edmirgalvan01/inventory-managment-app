import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import EditProductPage from "./pages/EditProduct";
import EditSalePage from "./pages/EditSale";
import InventoryPage from "./pages/Inventory";
import NewProductPage from "./pages/NewProduct";
import NewSalePage from "./pages/NewSale";
import ProductPage from "./pages/Product";
import SalePage from "./pages/Sale";
import SalesPage from "./pages/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/edit-product/:productId",
    element: <EditProductPage />,
  },
  {
    path: "/edit-sale/:saleId",
    element: <EditSalePage />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
  {
    path: "/new-product",
    element: <NewProductPage />,
  },
  {
    path: "/new-sale",
    element: <NewSalePage />,
  },
  {
    path: "/sale/:saleId",
    element: <SalePage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/sales",
    element: <SalesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
