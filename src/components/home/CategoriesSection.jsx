import { FiChevronRight } from 'react-icons/fi';
import { categories } from '../../data/localData';

const CategoriesSection = () => {

  return (
      <section className="py-12">
        <div className="container w-full mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <a href="category" className="text-blue-600 hover:text-blue-800 flex items-center">
              View all <FiChevronRight className="ml-1" />
            </a>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-sm hover:scale-[0.95] transition text-center cursor-pointer">
                <div className="bg-gray-100 w-16 h-16 mx-auto rounded-full mb-3 flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} items</p>
              </li>
            ))}
          </ul>

        </div>
      </section>
  )
}

export default CategoriesSection;
