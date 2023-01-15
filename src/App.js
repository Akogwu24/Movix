import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { PROTECTED_PATHS, PUBLIC_PATHS } from './app/routes';
import { Layout } from './components/layouts/Layout';
import { PrivateRoutes } from './components/layouts/PrivateRoutes';
import { PublicRoutes } from './components/layouts/PublicRoutes';
import { Login } from './pages/auth pages/Login';
import { Register } from './pages/auth pages/Register';
import { Home } from './pages/Home';
import { logout } from './redux/features/userSlice';

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  // console.log('state', state);

  // const deleteTokenAndKickUserOut = useCallback(() => {
  //   dispatch(logout());
  //   localStorage.removeItem('persist:root');
  // }, [dispatch]);

  // console.log('user', user);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* protected parts of the app */}
          <Route element={<PrivateRoutes user={user} />}>
            <Route path={PROTECTED_PATHS.HOME} element={<Home />} />

            <Route path='*' element={<Navigate to={PROTECTED_PATHS.HOME} replace />} />
          </Route>

          {/* public facing parts */}
          <Route element={<PublicRoutes user={user} />}>
            <Route element={<Login />} path={PUBLIC_PATHS.LOGIN} />
            <Route element={<Register />} path={PUBLIC_PATHS.REGISTER} />

            <Route path='*' element={<Navigate to={PUBLIC_PATHS.LANDING} replace />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
