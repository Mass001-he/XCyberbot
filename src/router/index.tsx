import { createBrowserRouter } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import DemoPage from "../pages/demo";
import ContactPage from "../pages/contact";
import JoinPage from "../pages/join";
import AboutPage from "../pages/about";

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
      {
        path: "/about",
        element: <AboutPage />,
        name: "关于",
      },
      {
        path: "/join",
        element: <JoinPage />,
        name: "加入我们",
      },
      {
        path: "/contact",
        element: <ContactPage />,
        name: "联系我们",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
