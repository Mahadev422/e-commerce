import { useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import Products from '../components/product-page-comp/Products';
import SortOptions from '../components/filter-comp/SortOptions';
import CategoryOptions from '../components/filter-comp/CategoryOptions';
import CategoryOptionsTab from '../components/filter-comp/CategoryOptionsTab';
import Loader from '../components/extra/Loader';
import { useDispatch, useSelector } from 'react-redux';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { totalProducts, loading } = useSelector((state) => state.products);
  const filterProducts = [...totalProducts];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  if(loading) return <Loader />
  return (
    <div className="min-h-screen">
      <div className="mx-auto mb-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="p-5">
          <h1 className="text-3xl font-bold text-gray-900">Shop Products</h1>
          <p className="mt-2 text-gray-600">Browse our latest collection</p>
        </div>

        {/* Mobile filter dialog toggle */}
        <div className="lg:hidden mb-3 m-3">
          <button
            type="button"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FiFilter className="mr-2 h-5 w-5" />
            Filters
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* category filter */}
            <CategoryOptions />
          {/* Product grid */}
          <div className="lg:col-span-3">
            {/* Sort options */}
            <SortOptions length={filterProducts.length}/>

            {/* Products */}
            <Products sortedProducts={filterProducts} />

            {/* Empty state */}
            {filterProducts.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <h2 className="text-xl font-medium text-gray-700 mb-4">No products found</h2>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter dialog */}
      {mobileFiltersOpen && <CategoryOptionsTab setMobileFiltersOpen={setMobileFiltersOpen} />}
    </div>
  );
};

export default ProductListPage;