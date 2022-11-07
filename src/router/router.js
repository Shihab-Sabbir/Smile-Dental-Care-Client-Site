import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Logout from "../component/Logout/Logout";
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
            { path: '/service/details/:id',loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`), element: <ServiceDetails /> },
            { path: '/login', element: <Login /> },
            { path: '/logout', element: <Logout /> },
            { path: '/register', element: <Register /> },
            { path: '/profile', element: <Profile /> },
        ]
    }
])