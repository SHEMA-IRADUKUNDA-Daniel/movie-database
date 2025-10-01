import { Component } from "react";
import Home from "../src/home";
import About from "../src/about";
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
    path: "/about",
    Component: About,
  },
  {
    path: "/login",
    Component: Login,
  },
  // add more routes here
]);

export default routes;
