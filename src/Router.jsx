import {createBrowserRouter} from 'react-router-dom';

import App from './routes/App';
import HomePage from './routes/HomePage';

export const Router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <HomePage />}
  ]}
]);