import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ cartItems }) => {

  const navigate = useNavigate();

   const subTotal = cartItems.reduce(
    (acc, item) => acc + (item.discountPrice || item.price) * item.quantity,
    0
  );
  const tax = subTotal * 0.08;
  const total = subTotal + tax;
  const save = cartItems.reduce((acc, item) => {
    return item.discountPrice
      ? acc + (item.price - item.discountPrice) * item.quantity
      : acc;
  }, 0);
  
  const handleBuy = () => {
    const totalAmt = total.toFixed(2);
    const saveAmt = save.toFixed(2)
    const products = cartItems.map(({_id, quantity}) => ({productId: _id, quantity}));

    const orderData = {
      userId,
      totalAmt,
      saveAmt,
      items,
      products,
    };
  }

  return (
    <section>
      {/* Promo Code */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow mb-4"
      >
        <h3 className="font-medium text-gray-900 mb-3">Have a promo code?</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-auto border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="flex-auto bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
            Apply
          </button>
        </div>
      </motion.div>

      {/* Order Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8%)</span>
            <span className="font-medium">₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-2 p-2 rounded-2xl bg-green-100">
            <span className="text-gray-600 font-bold">You save</span>
            <span className="font-medium">₹{save.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleBuy}
          disabled={cartItems.length === 0}
          className='p-3 hover:scale-[.97] mt-3 active:scale-[0.95] transition w-full rounded-md font-medium text-white
              bg-blue-600 hover:bg-blue-700'
        >
          Proceed to Checkout
        </button>
      </motion.div>
    </section>
  );
};

export default OrderSummary;
