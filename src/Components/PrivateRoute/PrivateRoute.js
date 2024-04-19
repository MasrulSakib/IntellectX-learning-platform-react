import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if (loader) {
        <span className="loading loading-dots loading-lg"></span>
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;