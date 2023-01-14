import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PROTECTED_PATHS } from '../../app/routes';

export const PublicRoutes = ({ user }) => {
  console.log('public', user);
  const location = useLocation();
  return !user ? <Outlet /> : <Navigate to={PROTECTED_PATHS.HOME} state={{ from: location }} replace />;
};
