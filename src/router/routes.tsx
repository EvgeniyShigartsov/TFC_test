import type { RouteObject } from "react-router";
import { paths } from "./paths";
import { DashboardPage } from "~/components/pages/DashboardPage";
import { UserPage } from "~/components/pages/UserPage";

export const ROUTES: RouteObject[] = [
  {
    path: paths.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: paths.USER,
    element: <UserPage />,
  },
  {
    path: paths.NOT_FOUND,
    element: <h1>Not found page</h1>,
  },
];
