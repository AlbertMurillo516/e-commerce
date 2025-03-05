import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decoded = jwtDecode(token);
  if (!allowedRoles.includes(decoded.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;