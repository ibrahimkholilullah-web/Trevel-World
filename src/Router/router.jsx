import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home";
import Login from "../Components/Component/Login";
import Register from "../Components/Component/Register";
import AddVisa from "../Components/Rout/AddVisa";
import Allvisa from "../Components/Rout/Allvisa";
import VisaDitails from "../Components/Rout/VisaDitails";
import PrivatedRouter from "../Components/Rout/PrivatedRouter";
import MyVisaApplication from "../Components/Rout/MyVisaApplication";
import MyAddedVisas from "../Components/Rout/MyAddedVisas";
import Error from "../Components/Component/Error";
import Toutorial from "../Components/All Visas/Toutorial";
import StudentVisa from "../Components/All Visas/StudentVisa";
import OffcialVisa from "../Components/All Visas/OffcialVisa";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allvisa',
                element:<PrivatedRouter><Allvisa></Allvisa></PrivatedRouter>,
                loader: () => fetch('http://localhost:4500/visa')
            },
            {
                path:'/addvisa',
                element:<PrivatedRouter><AddVisa></AddVisa></PrivatedRouter>
            },
            {
                path:'myaddesVisas',
                element:<PrivatedRouter><MyAddedVisas></MyAddedVisas></PrivatedRouter>,
                loader : () => fetch('http://localhost:4500/visa')
            },
            {
                path:'/myvisaApplication',
                element:<PrivatedRouter><MyVisaApplication></MyVisaApplication></PrivatedRouter>,
                loader : () => fetch('http://localhost:4500/myvisa')
            },
            {
                path: "/Toutorial",
                element:<PrivatedRouter><Toutorial></Toutorial></PrivatedRouter>,
                loader: () => fetch('http://localhost:4500/visa')
            },
            {
                path:'/studentVisa',
                element:<PrivatedRouter><StudentVisa></StudentVisa></PrivatedRouter>,
                loader: () => fetch('http://localhost:4500/visa')
            },
            {
                path:'/offcialVisa',
                element:<PrivatedRouter><OffcialVisa></OffcialVisa></PrivatedRouter>,
                loader: () => fetch('http://localhost:4500/visa')
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
        element:<PrivatedRouter><VisaDitails></VisaDitails></PrivatedRouter>,
        loader: ({params}) => fetch(`http://localhost:4500/visa/${params.id}`)
    },
   
])
export default router;