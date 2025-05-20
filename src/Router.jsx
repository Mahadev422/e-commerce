import {createBrowserRouter} from 'react-router-dom';

import App from './routes/App';
import HomePage from './routes/HomePage';
import SettingsPage from './routes/SettingPage';
import Security from './components/seting-comp/Security';
import Notification from './components/seting-comp/Notification';
import Billing from './components/seting-comp/Billing';
import Preference from './components/seting-comp/Preference';

export const Router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <HomePage />},
    {path: 'setting', element: <SettingsPage />, children: [
      {index: true, element: <Security />},
      {path: 'notification', element: <Notification />},
      {path: 'billing', element: <Billing />},
      {path: 'preference', element: <Preference />}
    ]},
  ]}
],
{basename: '/e-commerce'});