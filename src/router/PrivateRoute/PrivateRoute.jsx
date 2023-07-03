import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loading from '../../Assets/loading1.gif';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);
    if (loading) {
        return <div className='flex justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;