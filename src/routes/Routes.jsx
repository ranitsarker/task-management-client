import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Regsiter";
import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import CreateTask from "../pages/dashboard/CreateTask";

const allRoutes = createBrowserRouter([
{
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },
        {
            path:"/login",
            element: <Login></Login>,
        },
    ]
},
{
    path:"/",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
        {
            path:"/create-task",
            element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>,
        },
    ]
},
])

export default allRoutes;