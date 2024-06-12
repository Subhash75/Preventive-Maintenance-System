/*
All Routes setup done here
Uses router 6 createBrowserRouter object method for creating routes
Used in <App /> 
*/
import { lazy, Suspense } from "react"; // Import lazy and Suspense
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthRoute from "./components/LayoutRoutes/AuthRoute";
import MainLayout from "./components/LayoutRoutes/MainLayout";
import ChunkLoader from "./components/Loaders/ChunkLoader";

const LoginPage = lazy(() => import("./modules/Login/LoginPage"));
const Dashboard = lazy(() => import( "./modules/Dashboard"));
const Inventory = lazy(() => import("./modules/Inventory"));
const Scheduling = lazy(() => import("./modules/Scheduling"));
const ScheduledTasks = lazy(() => import("./modules/ScheduledTasks.tsx"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <AuthRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/inventory",
            element: <Inventory />,
          },
          {
            path: "/scheduling",
            element: <Scheduling />,
          },
          {
            path: "/scheduled-tasks",
            element: <ScheduledTasks />,
          },
        ],
      },
    ],
  },
]);

function Routes() {
  return (
    <Suspense fallback={<ChunkLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Routes;
