import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/Layout/AdminLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index : true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <p>Admin Dashboard</p>
            },
            {
                path: 'add-admin',
                element: <p>Add Admin</p>
            }
        ]
    }
]);


export default router;