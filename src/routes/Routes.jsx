import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Regsiter";
import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import CreateTask from "../pages/dashboard/CreateTask";
import DashboardHome from "../pages/dashboard/DashBoardHome";
import ToDoList from "../pages/dashboard/ToDoList ";
import Benefited from "../pages/Benefited";
import UpdateTask from "../components/dashboard/UpdateTask";
import AboutUs from "../pages/AboutUs";

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
            path:"/benefit",
            element: <Benefited></Benefited>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },
        {
            path:"/login",
            element: <Login></Login>,
        },
        {
            path:"/about-us",
            element: <AboutUs></AboutUs>,
        },
    ]
},
{
    path:"/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
        {
            path:"/dashboard",
            element: <PrivateRoutes><DashboardHome></DashboardHome></PrivateRoutes>,
        },
        {
            path:"create-task",
            element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>,
        },
        {
            path:"ToDoList",
            element: <PrivateRoutes><ToDoList></ToDoList></PrivateRoutes>,
        },
        {
            path:"update-task",
            element: <PrivateRoutes><UpdateTask></UpdateTask></PrivateRoutes>,
        },
    ]
},
])

export default allRoutes;