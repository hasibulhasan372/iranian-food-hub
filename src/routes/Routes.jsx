import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../components/card/Chef/Chef";
import Recipe from "../components/card/Recipe/Recipe";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import Blog from "../pages/BLog/Blog";
import Favorite from "../components/Favorite/Favorite";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                    path: 'blog',
                    element: <Blog></Blog>
            },
            {
                path: 'chef',
                element: <Chef></Chef>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://iranian-food-hub-server-hasibulhasan372.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'favorite',
                element: <Favorite></Favorite>,
                loader: () => fetch('https://iranian-food-hub-server-hasibulhasan372.vercel.app/recipe')
            }
        ]
    }
]);

export default router;