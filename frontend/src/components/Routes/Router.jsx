import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router