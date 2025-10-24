import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import About from "../pages/about/About";
import Homepage from "../pages/landingPage/home/Homepage";
import Service from "../pages/service/Service";
import DashRouter from "../components/dashboard/dashRouter/DashRouter";
import Logo from "../pages/dashboard/logo/Logo";
import Team from "../pages/dashboard/team/team";
import Category from "../pages/dashboard/category/Category";
import User from "../pages/dashboard/user/User";
import Client from "../pages/dashboard/clients/Client";
import AdminBlog from "../pages/dashboard/blog/AdminBlog";
import Project from "../pages/dashboard/projects/Projects";
import Main from "../pages/dashboard/main/Main";

// Main Layout with Navbar/Footer
const Router = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Router;

export const router = createBrowserRouter([
  // Redirect /home to /
  {
    path: "/home",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <DashRouter />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "main",
        element: <Main />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "logos",
        element: <Logo />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "users",
        element: <User />,
      },
      {
        path: "client",
        element: <Client />,
      },
      {
        path: "blog",
        element: <AdminBlog />,
      },
    ],
  },
  {
    path: "/landing",
    element: <Router />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);
