import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PUBLIC_PATHS } from '../../app/routes';

export const PrivateRoutes = ({ user }) => {
  console.log('private', user);
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to={PUBLIC_PATHS.LOGIN} state={{ from: location }} replace />;
};
