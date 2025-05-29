import { createBrowserRouter } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import DemoPage from "../pages/demo";

export const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        name: "首页",
      },
      {
        path: "/product",
        element: <ProductPage />,
        name: "产品",
      },
      {
        path: "/demo",
        element: <DemoPage />,
        name: "案例",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
