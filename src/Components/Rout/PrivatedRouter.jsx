import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../AuthPrivate/AuthPrivated';
import Loding from '../../Router/Loding';

const PrivatedRouter = ({children}) => {
    const {user, loding} = useContext(AuthProvider)
    const location = useLocation()
    if(loding){
     return <Loding></Loding>
    }
   if(user){
    return children
   }
   
    return (
       <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivatedRouter;
