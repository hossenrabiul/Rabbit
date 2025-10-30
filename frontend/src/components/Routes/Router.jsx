import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Profile from "../../pages/Profile";
import CollectionPage from "../../pages/CollectionPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path : '/register',
                element: <Register/>
            },
            {
                path : '/profile',
                element: <Profile/>
            },
            {
                path : '/collections/:collection',
                element: <CollectionPage/>
            }
        ]
    }
])

export default router