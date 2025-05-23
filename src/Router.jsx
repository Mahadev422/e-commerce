import {createBrowserRouter} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import App from './routes/App';
import HomePage from './routes/HomePage';
import SettingsPage from './routes/SettingPage';
import Security from './components/seting-comp/Security';
import Notification from './components/seting-comp/Notification';
import Billing from './components/seting-comp/Billing';
import Preference from './components/seting-comp/Preference';
import CategoriesPage from './routes/CategoriesPage';
import UserProfilePage from './routes/UserProfilePage';
import Order from './components/profile-comp/Order';
import UserDetails from './components/profile-comp/UserDetails';
import FavouritePage from './routes/FavouritePage';
import ProductListPage from './routes/ProductListPage';
import CartPage from './routes/CartPage';
import ProductProfile from './routes/ProductProfile';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import NotFoundPage from './routes/PageNotFound';
import AdminPanel from './routes/AdminPanel';
import PaymentPage from './routes/PaymentPage';

export const Router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <HomePage />},
    {path: 'category', element: <CategoriesPage />},
    {path: 'products', element: <ProductListPage />},
    {path: 'product/:id', element: <ProductProfile />},

    {element: <PrivateRoute />, children: [
      {path: 'cart', element: <CartPage />},
      {path: 'user-profile', element: <UserProfilePage />, children: [
        {index: true, element: <UserDetails />},
        {path: 'order', element: <Order />},
        { path: '*', element: <NotFoundPage /> }
      ]},
      {path: 'setting', element: <SettingsPage />, children: [
      {index: true, element: <Security />},
      {path: 'notification', element: <Notification />},
      {path: 'billing', element: <Billing />},
      {path: 'preference', element: <Preference />},
      { path: '*', element: <NotFoundPage /> }
    ]},
    {path: 'favourite', element: <FavouritePage />},
    { path: '*', element: <NotFoundPage /> }
    ]},
    { path: '*', element: <NotFoundPage /> }
  ]},
  {path: 'log-in', element: <LoginPage />},
  {path: 'signup', element: <SignupPage />},
  {path: 'admin', element: <AdminPanel />},
  {path: 'payment', element: <PaymentPage />}
]
);