import { motion } from "framer-motion";
import { FaCheck } from 'react-icons/fa';

const PaymentComplete = () => {

  return (
    <motion.div 
    className="min-h-screen flex items-center justify-center p-4"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-green-500 text-4xl" />
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
      <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
      <a href="/"
        className="flex justify-center bg-indigo-600 text-white py-3 rounded-lg font-medium"
      >
        Back to Shopping
      </a>
    </div>
  </motion.div>
  )
}

export default PaymentComplete;
