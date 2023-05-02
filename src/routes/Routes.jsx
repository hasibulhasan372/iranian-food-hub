import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../components/card/Chef/Chef";
import Recipe from "../components/card/Recipe/Recipe";

const router = createBrowserRouter ([
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
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
]);

export default router;