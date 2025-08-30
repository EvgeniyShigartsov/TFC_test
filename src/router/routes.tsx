import { Outlet, type RouteObject } from "react-router";
import { paths } from "./paths";
import { DashboardPage } from "~/pages/DashboardPage";
import { UserPage } from "~/pages/UserPage";
import { NotFoundPage } from "~/pages/NotFoundPage";
import { Header } from "~/components/Header";

export const ROUTES: RouteObject[] = [
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
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
    ],
  },
];
