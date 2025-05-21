import { FiStar } from 'react-icons/fi';
import { MdOutlineShoppingCart, MdOutlineRemoveShoppingCart  } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import ProductImage from '../components/product-profile/ProductImage';
import ProductSpecifications from '../components/product-profile/ProductSpecifications';
import Loader from '../components/extra/Loader';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../store/slices/authSlice';
// import { useEffect } from 'react';
//import { fetchProductById } from '../redux/fetching';

const ProductProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { totalProducts } = useSelector(state => state.products);
  const { cart } = useSelector((state) => state.auth)

  const product = totalProducts.find(p => p._id == id);

  if(!product) return <Loader />

  return (
    <div className="min-h-screen p-2 m-2">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImage product={product} />

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                {product.discountPrice && <span className="text-3xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>}
                {product.discountPrice && (
                  <>
                    <span className="ml-3 text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Color</h2>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex text-center gap-3">
              {cart.includes(product._id) ? (
                <button
                  onClick={() => dispatch(removeToCart(product._id))}
                  className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-black rounded-md font-medium py-2 px-6 h-full transition hover:scale-[0.97] active:scale-[0.9]"
                >
                  <MdOutlineRemoveShoppingCart className="h-6 w-6" />
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(product._id))}
                  className="flex items-center justify-center bg-blue-600 py-2 hover:bg-blue-700 text-white rounded-md font-medium px-6 h-full transition hover:scale-[0.97] active:scale-[0.9]"
                >
                  <MdOutlineShoppingCart className="h-6 w-6" />
                </button>
              )}

              <Link
                onClick={() => {
                  if (!cart.includes(product._id)) {
                    dispatch(addToCart(product._id));
                  }
                }}
                to="/cart"
                className="flex items-center justify-center flex-1 bg-green-700 hover:bg-green-600 text-white rounded-md font-medium py-2 px-6 h-full transition hover:scale-[0.97] active:scale-[0.9]"
              >
                Buy Now
              </Link>
            </div>

          </div>
        </div>

        {/* Product Tabs */}
        <ProductSpecifications />
      </div>
    </div>
  );
};

export default ProductProfile;