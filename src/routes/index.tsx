import React from "react";

import { Routes } from "../constants/routes";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFound />,
  },
];
