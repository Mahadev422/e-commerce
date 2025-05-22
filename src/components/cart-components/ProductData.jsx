import { motion } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToCart } from '../../store/slices/authSlice';
import { updateQunatity } from '../../store/slices/productSlice';

const ProductData = ({ cartItems }) => {
  const dispatch = useDispatch();
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  return (
    <div className="space-y-4 w-full">
      {cartItems.map(item => (
        <motion.div
          key={item._id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
          className="bg-white hover:scale-[0.97] transition rounded-lg shadow"
        >
          <div className="flex p-4">
            <Link to={`/product/${item._id}`} className="w-24 h-24 flex-shrink-0">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
            </Link>
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <button
                  onClick={() => dispatch(removeToCart(item._id))}
                  className="text-gray-400 hover:text-red-500 hover:scale-125 transition"
                >
                  <FiTrash2 />
                </button>
              </div>
              <div className="mt-3 flex items-center">
                {item.discountPrice ? (
                  <>
                    <span className="font-bold text-gray-900">₹{item.discountPrice.toFixed(2)}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₹{item.price.toFixed(2)}</span>
                    <span className="ml-2 text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded">
                      {Math.round((1 - item.discountPrice / item.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
                )}
              </div>
              <div className="mt-4 flex items-center">
                <button
                  onClick={() => dispatch(updateQunatity({id: item._id, newQuantity: item.quantity - 1}))}
                  className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  <FiMinus className="h-4 w-4" />
                </button>
                <span className="mx-3 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => dispatch(updateQunatity({id: item._id, newQuantity: item.quantity + 1}))}
                  className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  <FiPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProductData
