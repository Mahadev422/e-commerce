import Products from '../components/product-page-comp/Products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavouritePage = () => {

  const { totalProducts } = useSelector(state => state.products);
  const sortedProducts = totalProducts.filter((product) => product.isNewProduct);

  return (
    <div>
      <div className="p-3">
          <h1 className="text-3xl font-bold text-gray-900">Your Favourites</h1>
          <p className="mt-2 text-gray-600">Browse more Products</p>
        </div>
        <div className='m-3'>
          {sortedProducts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-xl font-medium text-gray-700 mb-4">No favourite products found</h2>
          <Link to='/product'
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Shop More
          </Link>
        </div> ) : <Products sortedProducts={sortedProducts} />}
        </div>
    </div>
  )
}

export default FavouritePage;
