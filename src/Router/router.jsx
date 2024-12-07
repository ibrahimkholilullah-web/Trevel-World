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
import Toutorial from "../Components/All Visas/Toutorial";
import StudentVisa from "../Components/All Visas/StudentVisa";
import OffcialVisa from "../Components/All Visas/OffcialVisa";
import App from "../App";
import Error from "../Components/Component/Error";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allvisa',
                element:<PrivatedRouter><Allvisa></Allvisa></PrivatedRouter>,
                loader: () => fetch('https://b10-a10-projects-server.vercel.app/visa')
            },
            {
                path:'/addvisa',
                element:<PrivatedRouter><AddVisa></AddVisa></PrivatedRouter>
            },
            {
                path:'/myaddesVisas',
                element:<PrivatedRouter><MyAddedVisas></MyAddedVisas></PrivatedRouter>,
                loader : () => fetch('https://b10-a10-projects-server.vercel.app/visa')
            },
            {
                path:'/myvisaApplication',
                element:<PrivatedRouter><MyVisaApplication></MyVisaApplication></PrivatedRouter>,
                loader : () => fetch('https://b10-a10-projects-server.vercel.app/myvisa')
            },
            {
                path: "/Toutorial",
                element:<PrivatedRouter><Toutorial></Toutorial></PrivatedRouter>,
                loader: () => fetch('https://b10-a10-projects-server.vercel.app/visa')
            },
            {
                path:'/studentVisa',
                element:<PrivatedRouter><StudentVisa></StudentVisa></PrivatedRouter>,
                loader: () => fetch('https://b10-a10-projects-server.vercel.app/visa')
            },
            {
                path:'/officialVisa',
                element:<PrivatedRouter><OffcialVisa></OffcialVisa></PrivatedRouter>,
                loader: () => fetch('https://b10-a10-projects-server.vercel.app/visa')
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
        loader: ({params}) => fetch(`https://b10-a10-projects-server.vercel.app/visa/${params.id}`)
    },
   
])
export default router;