import { motion } from "framer-motion";
import { FaUser, FaHistory, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";


const ProfileSidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname;
  const { userDetails } = useSelector((state) => state.auth);
  const userData = {...userDetails};

  const handleLogout = () => {
    localStorage.removeItem('logged');
    return navigate('/log-in')
  }

  return (
    <motion.div 
      className="w-full md:w-64 bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="p-6 text-center border-b">
        <div className="w-24 h-24 rounded-full bg-indigo-100 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <FaUser className="text-indigo-500 text-4xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{userData.name || 'name'}</h3>
        <p className="text-sm text-gray-500">UID: {userData.id}</p>
      </div>
      
      <nav className="p-4">
        <Link to='/user-profile'>
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${active === '/user-profile' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaUser className="mr-3" />
            <span>Profile</span>
          </motion.button>
        </Link>
        
        <Link to='order'>
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${active === '/user-profile/order' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaHistory className="mr-3" />
            <span>My Orders</span>
          </motion.button>
        </Link>
        <Link>
          <motion.button
          onClick={handleLogout}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </motion.button>
        </Link>
      </nav>
    </motion.div>
  )
}

export default ProfileSidebar;
