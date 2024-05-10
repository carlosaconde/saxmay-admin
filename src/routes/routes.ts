import Login from "../pages/Login";
import Promos from "../pages/Promos";
import Sports from "../pages/Sports";
import Users from "../pages/Users";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/login",
    path: "login",
    Component: Login,
    name: "login",
  },
  {
    to: "/users",
    path: "users",
    Component: Users,
    name: "usuarios",
  },
  {
    to: "/promos",
    path: "promos",
    Component: Promos,
    name: "promos",
  },
  {
    to: "/Sports",
    path: "sports",
    Component: Sports,
    name: "deportes",
  },
];
