import { FiHeart, FiStar } from 'react-icons/fi';
import { MdOutlineShoppingCart, MdOutlineRemoveShoppingCart  } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeToCart, removeToWishlist} from '../../store/slices/authSlice'

const Products = ({ sortedProducts }) => {
  const { wishList, cart } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-3 m-2 mx-4 justify-center">
      <AnimatePresence>
        {sortedProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: 0.1*index}}
            className="flex-auto rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-[0.98] transition bg-white"
          >
            {/* Product image */}
              <div className='relative'>
              <Link to={`/product/${product._id}`} className="relative">
                <motion.img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                {product.isNewProduct && (
                  <motion.span 
                    className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    New
                  </motion.span>
                )}
                
              </Link>
              {wishList.includes(product._id) ? (<motion.button
              onClick={() => dispatch(removeToWishlist(product._id))}
              className='absolute top-2 right-2 p-2 rounded-full bg-red-100 text-red-500 shadow-md hover:bg-gray-100'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiHeart className='h-5 w-5 fill-current' />
            </motion.button>) : (<motion.button
              onClick={() => dispatch(addToWishlist(product._id))}
              className='absolute top-2 right-2 p-2 rounded-full bg-white text-gray-500 shadow-md hover:bg-gray-100'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiHeart className='h-5 w-5'  />
            </motion.button>)}
            </div>

            {/* Product info */}
            <div className="p-4">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <FiStar
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  </motion.div>
                ))}
                <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
              </div>
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <div className="mt-3 flex items-center">
                {product.discountPrice ? (
                  <>
                    <motion.span 
                      className="font-bold text-gray-900"
                      key={`price-${product.id}`}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      ${product.discountPrice.toFixed(2)}
                    </motion.span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="ml-2 text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <motion.span 
                    className="font-bold text-gray-900"
                    key={`price-${product.id}`}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    ${product.price.toFixed(2)}
                  </motion.span>
                )}
              </div>
              <div className='relative'>
              <AnimatePresence mode="wait">
                {cart.includes(product._id) ? (
                  <motion.button
                    onClick={() => dispatch(removeToCart(product._id))}
                    key={`remove-${product._id}`}
                    className="absolute -top-13 -right-2 flex items-center justify-center bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileTap={{rotateX: 90}}
                    transition={{duration: 0.2 }}
                  >
                    <MdOutlineRemoveShoppingCart className="h-5 w-5" />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => dispatch(addToCart(product._id))}
                    key={`add-${product._id}`}
                    className="absolute -top-13 -right-2 flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileTap={{rotateX: 90}}
                    transition={{duration: 0.2 }}
                  >
                    <MdOutlineShoppingCart className="h-5 w-5" />
                  </motion.button>
                )}
              </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Products;