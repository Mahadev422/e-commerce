import { motion } from "framer-motion";
const HeroSection = () => {

  return (
    <section className="container mx-auto p-1">
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 2}}
           className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 text-white rounded-b-2xl">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Summer Sale - Up to 50% Off</h2>
              <p className="mb-6">Don't miss our biggest sale of the season. Limited time offer!</p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          </motion.div>
      </section>
  )
}

export default HeroSection;
