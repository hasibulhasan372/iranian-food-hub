import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='my-container flex justify-center items-center h-screen'>
            <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
        </div>;
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}  replace></Navigate>;
};

export default PrivateRoute;