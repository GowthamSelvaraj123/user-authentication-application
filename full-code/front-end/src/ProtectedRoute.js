import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const token = localStorage.getItem('authToken');
    const tokenExpiry = localStorage.getItem('authTokenExpiry');
    const isAuthenticated = token && tokenExpiry && new Date().getTime() < tokenExpiry;
    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
