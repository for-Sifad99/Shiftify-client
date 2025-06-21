import { createBrowserRouter } from "react-router";
import Root from '../layouts/ShiftifyRoot';
import AuthRoot from "../layouts/AuthRoot";
import Home from '../pages/home/Home/Home';
import Coverage from "../pages/Coverage/Coverage";
import AuthLogin from '../pages/Authentication/AuthLogin/AuthLogin';
import AuthRegister from "../pages/Authentication/AuthRegister/AuthRegister";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('./warehouses.json'),
                hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
            },
        ],
    },
    {
        path: "/",
        Component: AuthRoot,
        children: [
            { path: "/auth-login", Component: AuthLogin },
            { path: "/auth-register", Component: AuthRegister },
        ],
    },
]);

export default router;
