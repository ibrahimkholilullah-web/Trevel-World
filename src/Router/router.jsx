import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Components/Root/Root";
import Home from "../Components/Home";
import Login from "../Components/Component/Login";
import Register from "../Components/Component/Register";
import AddVisa from "../Components/Rout/AddVisa";
import Allvisa from "../Components/Rout/Allvisa";
import VisaDitails from "../Components/Rout/VisaDitails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allvisa',
                element:<Allvisa></Allvisa>,
                loader: () => fetch('http://localhost:4500/visa')
            },
            {
                path:'/addvisa',
                element:<AddVisa></AddVisa>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/visaditails/:id',
        element:<VisaDitails></VisaDitails>,
        loader: ({params}) => fetch(`http://localhost:4500/visa/${params.id}`)
    }
])
export default router;