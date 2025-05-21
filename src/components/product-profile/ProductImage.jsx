import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeToWishlist } from '../../store/slices/authSlice';

const ProductImage = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const { wishList } = useSelector((state) => state.auth);
  
  const nextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div 
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-xl shadow-md overflow-hidden aspect-square"
      >
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-contain p-8"
        />
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
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
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`bg-white rounded-lg overflow-hidden aspect-square border-2 hover:scale-[0.9] transition ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
          >
            <img
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
