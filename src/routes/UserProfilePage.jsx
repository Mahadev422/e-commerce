import { motion, AnimatePresence } from 'framer-motion';
import ProfileSidebar from '../components/profile-comp/ProfileSidebar';
import Loader from '../components/extra/Loader';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserById } from '../store/fetch/user';

const UserProfilePage = () => {
  const { logged, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserById(logged));
  },[logged])

  if(loading) return <Loader />

  return (
    <motion.div 
      className="py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <div className="flex flex-wrap gap-8">
          {/* Sidebar */}
          <ProfileSidebar />
          {/* Main Content */}
          <motion.div 
            className="bg-white rounded-xl w-full shadow-md overflow-hidden"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </motion.div>
        </div>
    </motion.div>
  );
};

export default UserProfilePage;