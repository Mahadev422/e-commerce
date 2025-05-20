import { useSelector } from "react-redux";
import Products from "../product page comp/Products";
import { FiChevronRight } from "react-icons/fi";

const RecentSection = () => {
  const products = useSelector((state) => state.products.totalProducts);
  const sortedProducts = products.filter((product) => product.isNewProduct);

  return (
    <div className="m-3">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Recent seen Items</h2>
        <a href="product" className="text-blue-600 hover:text-blue-800 flex items-center">
          View all <FiChevronRight className="ml-1" />
        </a>
      </div>
      <Products sortedProducts={sortedProducts} />
    </div>
  )
}

export default RecentSection;
