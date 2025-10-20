import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children:[
            {

            }
        ]
    }
])

export default router