import { useDispatch } from "react-redux";
import { allProducts, highToLow, lowToHigh } from "../../store/slices/filterSlice";

const SortOptions = ({ length }) => {
  const dispatch = useDispatch()

  const handleFilter = (value) => {
    if(value === 'All') {
      dispatch(allProducts());
    }
    else if (value === 'high-low') {
      dispatch(highToLow());
    }
    else {
      dispatch(lowToHigh());
    }
  };

  return (
    <div className="flex justify-between items-center m-4">
      <div className="text-sm text-gray-500">
        Showing <span className="font-medium">{length}</span> products
      </div>
      <div className="flex items-center">
        <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
        <select onChange={(e) => handleFilter(e.target.value)}  defaultValue='All'
          id="sort"
          className="p-1 bg-red-100 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
        >
          <option value="All">All</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default SortOptions
