import { createBrowserRouter } from "react-router";
import Root from '../layouts/ShiftifyRoot';
import Home from '../pages/home/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
        ],
    },
]);

export default router;