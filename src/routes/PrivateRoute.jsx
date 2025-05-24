import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('logged'); 

  return isAuthenticated ? <Outlet /> : window.location.href = '/log-in';
};

export default PrivateRoute;