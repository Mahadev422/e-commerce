import { featureProduct } from "../../data/localData";

const FeatureCollection = () => {

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Collections</h2>
      <div className="flex flex-wrap gap-6">
        {featureProduct.map((collection, index) => (
          <div
            key={index}
            className="relative hover:scale-[0.97] transition flex-auto rounded-xl overflow-hidden h-64"
          >
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full bg-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">{collection.title}</h3>
              <p className="text-gray-200 mb-4">{collection.description}</p>
              <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
                {collection.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCollection
