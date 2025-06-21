import React from 'react';
import useAuth from '../hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    // set loading when user Null
    if(loading){
        return <div className='min-h-screen flex flex-col justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>
    }

    // navigate user where he/she want to go After login
    if(!user){
        return <Navigate to='/auth-login' state={location?.pathname} />
    };

    // return children 
    return children;
};

export default PrivetRouter; 

