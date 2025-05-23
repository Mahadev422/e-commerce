import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider} from 'react-router-dom';
import { Router } from './Router';
import { store } from './store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
)
