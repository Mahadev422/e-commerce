import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('logged'); 

  return isAuthenticated ? <Outlet /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;