import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../components/card/Chef/Chef";
import Recipe from "../components/card/Recipe/Recipe";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'chef',
                element: <Chef></Chef>
            },
            {
                path: '/chef/:id',
                element: <Recipe></Recipe>,
                loader: ({ params }) => fetch(`https://iranian-food-hub-server-hasibulhasan372.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;