import { lazy } from "react";
import Loadable from "./Loadable";
// ----------------------------------------------------------------------
const Page404 = Loadable(lazy(() => import("pages/Errors/Page404")));
// ----------------------------------------------------------------------
const AdminLayout = Loadable(lazy(() => import("layouts/AdminLayout")));
const PublicLayout = Loadable(lazy(() => import("layouts/PublicLayout")));
// ----------------------------------------------------------------------
const Home = Loadable(lazy(() => import("pages/Home")));
const Login = Loadable(lazy(() => import("pages/Login")));
// ----------------------------------------------------------------------
const PrivateContent = Loadable(lazy(() => import("pages/Private")));

const routes = [
  {
    path: "/",
    element: PublicLayout,
    isPrivate: false,
    children: [
      { path: "", element: Login },
      { path: "*", element: Page404 },
    ],
  },
  {
    path: "/chat/",
    element: AdminLayout,
    isPrivate: true,
    children: [
      { path: "", element: Home },
      { path: "profile", element: PrivateContent },
      { path: "*", element: Page404 },
    ],
  },
];

export default routes;
