
const CategoryOptions = () => {
  
  return (
    <div className="hidden lg:block">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
        
        <div className="space-y-6">
          {/* Category filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
            <div className="space-y-2">
              {['all', 'Electronics', 'Sports', 'Accessories'].map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600 capitalize">
                    {category === 'all' ? 'All Categories' : category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price range filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Price</h3>
            <div className="space-y-2">
              {['all', 'under50', '50to100', 'over100'].map((range) => (
                <div key={range} className="flex items-center">
                  <input
                    id={`price-${range}`}
                    name="price"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`price-${range}`} className="ml-3 text-sm text-gray-600">
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
    </div>
  )
}

export default CategoryOptions;
