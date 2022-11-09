import { createBrowserRouter } from "react-router-dom";
import AddService from "../component/AddService/AddService";
import Blog from "../component/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Logout from "../component/Logout/Logout";
import MyReview from "../component/MyReview/MyReview";
import Profile from "../component/Profile/Profile";
import Register from "../component/Register/Register";
import Search from "../component/Search/Search";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import Services from "../component/Services/Services";
import Layout from "../Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Layout />, children: [
            { path: '/', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/login', element: <Login /> },
            { path: '/logout', element: <Logout /> },
            { path: '/register', element: <Register /> },
            { path: '/addservice', element: <ProtectedRoute><AddService /></ProtectedRoute> },
            { path: '/profile', element: <Profile /> },
            { path: '/blog', element: <Blog /> },
            { path: '/search', element: <Search /> },
            { path: '/review', element: <ProtectedRoute><MyReview /></ProtectedRoute> },
            { path: '/service/details/:id', loader: async ({ params }) => fetch(` https://assignment-11-five.vercel.app/services/${params.id}`), element: <ServiceDetails /> },
        ]
    }
])