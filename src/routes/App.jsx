import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import NotificationSystem from '../components/extra/NotificationSystem';
import { initializeProduct } from '../store/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../store/fetch/products';

function App() {
  const url = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(initializeProduct());
    dispatch(fetchProducts());
  },[0])


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
          <div className="sticky top-13 h-screen z-10 bg-blue-50">
            <Sidebar />
          </div>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <NotificationSystem />
      <Footer />
    </div>
  );
}

export default App;
