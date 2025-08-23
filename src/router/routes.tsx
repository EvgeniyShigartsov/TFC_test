import type { RouteObject } from "react-router";
import { paths } from "./paths";

export const ROUTES: RouteObject[] = [
  {
    path: paths.DASHBOARD,
    element: <h1>Home page</h1>,
  },
  {
    path: paths.USER,
    element: <h2>User page</h2>,
  },
  {
    path: paths.NOT_FOUND,
    element: <h1>Not found page</h1>,
  },
];
