import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context_authentification/AuthContext'; // Assurez-vous d'avoir un contexte d'authentification

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default PrivateRoute;