import { motion } from 'framer-motion';

const PaymentNeed = ({ paymentMethod }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        {paymentMethod === 'paypal' && (
          <FaPaypal className="text-4xl text-blue-500 mx-auto mb-4" />
        )}
        {paymentMethod === 'apple' && (
          <FaApplePay className="text-4xl text-black mx-auto mb-4" />
        )}
        {paymentMethod === 'google' && (
          <SiGooglepay className="text-4xl text-gray-800 mx-auto mb-4" />
        )}
        <p className="text-gray-600 mb-4">You'll be redirected to {paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'apple' ? 'Apple Pay' : 'Google Pay'} to complete your payment securely.</p>
      </div>
      <motion.button
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={handleSubmit}
        disabled={isProcessing}
      >
        {isProcessing ? 'Redirecting...' : `Pay with ${paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'apple' ? 'Apple Pay' : 'Google Pay'}`}
      </motion.button>
    </motion.div>
  )
}

export default PaymentNeed;
