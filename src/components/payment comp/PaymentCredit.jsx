import { motion } from "framer-motion";
import { FaCreditCard, FaLock } from 'react-icons/fa';
import { useDispatch } from "react-redux";

const PaymentCredit = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    //dispatch(creditcardDetails(formData));
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <div className="relative">
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="1234567890123456"
            maxLength={16}
          />
          <div className="absolute right-3 top-2.5">
            <FaCreditCard className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            name="expiryDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <div className="relative">
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="123"
              maxLength={3}
            />
            <div className="absolute right-3 top-2.5">
              <FaLock className="text-gray-400 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </motion.form>
  )
}

export default PaymentCredit;
