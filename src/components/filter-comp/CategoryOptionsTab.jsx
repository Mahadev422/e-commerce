import { FiX } from 'react-icons/fi';

const CategoryOptionsTab = ({ setMobileFiltersOpen}) => {

  return (
    <div className="fixed inset-0 z-50 mt-10">
      <div className="flex items-end justify-center pt-4 px-4 pb-20">
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 flex justify-between flex-wrap gap-x-5">
              {/* Category filter */}
              <div className='flex-1'>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                <div className="space-y-2">
                  {['all', 'Electronics', 'Sports', 'Accessories'].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        name="mobile-category"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`mobile-category-${category}`} className="ml-3 text-sm text-gray-600 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price range filter */}
              <div className='flex-1'>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Price</h3>
                <div className="space-y-2">
                  {['all', 'under50', '50to100', 'over100'].map((range) => (
                    <div key={range} className="flex items-center">
                      <input
                        id={`mobile-price-${range}`}
                        name="mobile-price"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`mobile-price-${range}`} className="ml-3 text-sm text-gray-600">
                        {range === 'all' ? 'All Prices' : 
                          range === 'under50' ? 'Under $50' :
                          range === '50to100' ? '$50 - $100' : 'Over $100'}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Apply Filters
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                setMobileFiltersOpen(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryOptionsTab
