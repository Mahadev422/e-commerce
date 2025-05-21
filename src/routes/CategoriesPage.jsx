import FeatureCollection from "../components/product-page-comp/FeatureCollection";
import Loader from '../components/extra/Loader'
import { categories } from "../data/localData";

const CategoriesPage = () => {

  if(!categories) return <Loader />

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover products across all our categories
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className=' flex-auto rounded-xl shadow-md overflow-hidden transition hover:scale-[0.97]'
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full bg-cover  hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collections */}
        <FeatureCollection />
      </div>
    </div>
  );
};

export default CategoriesPage;
