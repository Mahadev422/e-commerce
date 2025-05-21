import Products from '../components/product-page-comp/Products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/extra/Loader';

const FavouritePage = () => {

  const { totalProducts } = useSelector(state => state.products);
  const { wishList, loading } = useSelector((state) => state.auth);
  const ids = [...wishList];

  const sortedProducts = totalProducts.filter(product => ids.includes(product._id));

  if(loading) return <Loader />

  return (
    <div>
      <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Favourites</h1>
        </div>
        <div>
          {ids.length === 0 ? (
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
