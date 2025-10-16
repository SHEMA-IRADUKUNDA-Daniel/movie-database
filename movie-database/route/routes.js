import { createBrowserRouter } from "react-router-dom";
import Home from "../src/home";
import Favorite from "../src/favorite";
import Layout from "../src/components/Layouts/Layout";
import Login from "../src/login";
import App from "../src/App";
import banner from "../src/components/common/banner";
import Details from "../src/movie/[id]";
import Register from "../src/register";

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
      {
        path: "/banner",
        Component: banner,
      },
      {
        path: "movie/:id",
        Component: Details,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default routes;
