import { motion, AnimatePresence } from 'framer-motion';
import ProfileSidebar from '../components/profile-comp/ProfileSidebar';
import { Outlet } from 'react-router-dom';

const UserProfilePage = () => {

  return (
    <motion.div 
      className="py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <ProfileSidebar />
          {/* Main Content */}
          <motion.div 
            className="flex-1 bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfilePage;