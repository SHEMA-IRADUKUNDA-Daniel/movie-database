import Home from "../src/home";
import Favorite from "../src/favorite";
import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Login from "../src/login";

const routes = createBrowserRouter([
  {
    path: "/",
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
  // add more routes here
]);

export default routes;
