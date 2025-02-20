import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import TaskBoard from "../components/TaskBoard/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TaskBoard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
