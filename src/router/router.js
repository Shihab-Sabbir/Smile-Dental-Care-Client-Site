import { createBrowserRouter } from "react-router-dom";
import AddService from "../component/AddService/AddService";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Logout from "../component/Logout/Logout";
import MyReview from "../component/MyReview/MyReview";
import Profile from "../component/Profile/Profile";
import Register from "../component/Register/Register";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import Services from "../component/Services/Services";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Layout />, children: [
            { path: '/', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/login', element: <Login /> },
            { path: '/logout', element: <Logout /> },
            { path: '/register', element: <Register /> },
            { path: '/addservice', element: <AddService /> },
            { path: '/profile', element: <Profile /> },
            { path: '/review', element: <MyReview /> },
            { path: '/service/details/:id', loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`), element: <ServiceDetails /> },
        ]
    }
])