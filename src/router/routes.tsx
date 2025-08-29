import type { RouteObject } from "react-router";
import { paths } from "./paths";
import { DashboardPage } from "~/pages/DashboardPage";
import { UserPage } from "~/pages/UserPage";
import { NotFoundPage } from "~/pages/NotFoundPage";

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
    element: <NotFoundPage />,
  },
];
