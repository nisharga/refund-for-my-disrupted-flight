import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loadingImg from '../../Assets/loading1.gif';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='h-full flex justify-center items-center'>
            <img src={loadingImg} alt="" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;