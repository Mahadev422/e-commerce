import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";

const UserDetails = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();

  const userData = {};

  const [isEditing, setIsEditing] = useState(false);

  function handleUpdate() {
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    dispatch(updateUserData({id: userData.id, updatedData: {name, address, phone}}));
  }

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
        {!isEditing ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            <FaEdit className="mr-2" />
            Edit Profile
          </motion.button>
        ) : (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              onClick={() => {
                //handleUpdate();
                setIsEditing(false);
              }}
            >
              Save Changes
            </motion.button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="w-10 pt-2">
            <FaUser className="text-gray-500" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
            {isEditing ? (
              <input ref={nameRef}
                type="text"
                name="name"
                defaultValue={userData.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="text-gray-800">{userData.name}</p>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 pt-2">
            <FaEnvelope className="text-gray-500" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
              <p className="text-gray-800">{userData.email}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 pt-2">
            <FaPhone className="text-gray-500" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
            {isEditing ? (
              <input ref={phoneRef}
                type="tel"
                name="phone"
                defaultValue={userData.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="text-gray-800">+91 {userData.phone}</p>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 pt-2">
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">Shipping Address</label>
            {isEditing ? (
              <textarea ref={addressRef}
                name="address"
                defaultValue={userData.address}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                rows="3"
              />
            ) : (
              <p className="text-gray-800">{userData.address}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default UserDetails
