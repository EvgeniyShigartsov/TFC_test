import type { RouteObject } from "react-router";
import { paths } from "./paths";
import { DashboardPage } from "~/components/pages/DashboardPage";

export const ROUTES: RouteObject[] = [
  {
    path: paths.DASHBOARD,
    element: <DashboardPage />,
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
