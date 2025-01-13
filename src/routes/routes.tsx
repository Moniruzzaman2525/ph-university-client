import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import Register from "../pages/Register";
import { Login } from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <App />,
        // element: <AdminLayout />,
        children: routeGenerator(adminPaths)
    },
    // {
    //     path: '/faculty',
    //     element: <App />,
    //     children: adminPaths
    // },
    // {
    //     path: '/student',
    //     element: <App />,
    //     children: adminPaths
    // },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default router