import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductData from "../components/cart-components/ProductData";
import OrderSummary from "../components/cart-components/OrderSummary";
import Loader from '../components/extra/Loader';

const CartPage = () => {
  const  products = useSelector(state => state.products.totalProducts);

  const cartItems = products.map((product) => ({...product, quantity: 1}));

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

  //if(!cartStore) return <Loader />

  return (
    <div className="p-3">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center mb-8"
      >
        <FiShoppingCart className="text-3xl text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
        <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
        {false ? "item" : "items"}
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-wrap gap-8">
        {/* Left: Cart Items */}
        <div className="flex-auto">
          <section>
            {false ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-lg shadow text-center"
              >
                <h2 className="text-xl font-medium text-gray-700 mb-4">
                  Your cart is empty
                </h2>
                <Link
                  to="/product"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            ) : (
              <ProductData cartItems={cartItems} />
            )}
          </section>
        </div>

        {/* Right: Order Summary */}
        <div className="flex-auto">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
