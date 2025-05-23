import { useState } from "react";
import { FaPaypal, FaApplePay, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiGooglepay, SiPhonepe } from "react-icons/si";
import { HiOutlineCash } from "react-icons/hi";
import PaymentComplete from "../components/payment comp/PaymentComplete";
import PaymentMethod from "../components/payment comp/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import PaymentCredit from "../components/payment comp/PaymentCredit";
import { postOrder } from "../store/fetch/order";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const { total, order } = useSelector((state) => state.order);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (Object.keys(order).length == 0) {
      return (window.location.href = "/cart");
    }
    setSuccess(true);
    dispatch(postOrder(order));
  };

  if (success) {
    return (
      <div className="min-h-screen py-12 px-4 bg-[url('/payment-background.png')] w-screen bg-cover bg-center">
        <PaymentComplete />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-[url('/payment-background.png')] w-screen bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Payment Details
            </h2>
            <div className="flex items-center text-gray-600">
              <FaLock className="mr-1" />
              <span className="text-sm">Secure Payment</span>
            </div>
          </div>

          {/* Payment method block */}
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          <div>
            {paymentMethod === "credit" && <PaymentCredit />}

            {(paymentMethod === "cod" ||
              paymentMethod === "phone-pe" ||
              paymentMethod === "google") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  {paymentMethod === "cod" && (
                    <HiOutlineCash className="text-4xl text-blue-500 mx-auto mb-4" />
                  )}
                  {paymentMethod === "phone-pe" && (
                    <SiPhonepe className="text-4xl text-black mx-auto mb-4" />
                  )}
                  {paymentMethod === "google" && (
                    <SiGooglepay className="text-4xl text-gray-800 mx-auto mb-4" />
                  )}
                  <p className="text-gray-600 mb-4">
                    {paymentMethod === "cod"
                      ? ""
                      : `You'll be redirected to ${" "} ${
                          paymentMethod === "credit"
                            ? "credit"
                            : paymentMethod === "phone-pe"
                            ? "Phone-Pe"
                            : "Google Pay"
                        } ${" "}
                    to complete your payment securely.`}
                  </p>
                </div>
              </motion.div>
            )}
            <motion.button
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleSubmit}
            >
              {paymentMethod === "cod" ? "Pay on Delivery" : `Pay ₹ ${total}`}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
