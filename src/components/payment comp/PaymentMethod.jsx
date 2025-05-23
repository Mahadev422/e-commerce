import { motion } from "framer-motion";
import { FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';

const PaymentMethod = ({paymentMethod, setPaymentMethod}) => {

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Payment Method</h3>
      <div className="grid grid-cols-4 gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'credit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
          onClick={() => setPaymentMethod('credit')}
        >
          <FaCreditCard className={`text-xl ${paymentMethod === 'credit' ? 'text-indigo-600' : 'text-gray-400'}`} />
          <span className={`text-xs mt-1 ${paymentMethod === 'credit' ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Card</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'paypal' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <FaPaypal className={`text-xl ${paymentMethod === 'paypal' ? 'text-indigo-600' : 'text-gray-400'}`} />
          <span className={`text-xs mt-1 ${paymentMethod === 'paypal' ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>PayPal</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'apple' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
          onClick={() => setPaymentMethod('apple')}
        >
          <FaApplePay className={`text-xl ${paymentMethod === 'apple' ? 'text-indigo-600' : 'text-gray-400'}`} />
          <span className={`text-xs mt-1 ${paymentMethod === 'apple' ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Apple Pay</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'google' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
          onClick={() => setPaymentMethod('google')}
        >
          <SiGooglepay className={`text-xl ${paymentMethod === 'google' ? 'text-indigo-600' : 'text-gray-400'}`} />
          <span className={`text-xs mt-1 ${paymentMethod === 'google' ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>Google Pay</span>
        </motion.button>
      </div>
    </div>
  )
}

export default PaymentMethod;
