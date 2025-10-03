import Home from "../src/home";
import Favorite from "../src/favorite";
import Layout from "../src/Layout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../src/login";
import App from "../src/App";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/home",
        Component: Home,
      },

      {
        path: "/favorite",
        Component: Favorite,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default routes;
