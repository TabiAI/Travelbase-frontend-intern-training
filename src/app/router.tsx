import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);