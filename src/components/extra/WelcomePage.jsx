import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiSearch, FiUser, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    if(logged) navigate('/home');

  },[logged])
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to ShopEase</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/home" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              Get Started <FiArrowRight />
            </Link>
            <Link 
              to="/login" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 hover:bg-opacity-10 transition flex items-center justify-center gap-2"
            >
              Sign In <FiUser />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiShoppingBag className="text-4xl mb-4 text-blue-500" />,
                title: "Wide Selection",
                description: "Thousands of products across multiple categories"
              },
              {
                icon: <FiSearch className="text-4xl mb-4 text-purple-500" />,
                title: "Easy to Find",
                description: "Powerful search and filtering tools"
              },
              {
                icon: <div className="text-4xl mb-4 text-green-500">$</div>,
                title: "Best Prices",
                description: "Competitive pricing and regular discounts"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start shopping?</h2>
          <p className="text-xl mb-8">Join thousands of happy customers today</p>
          <Link 
            to="/signup" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ShopEase</h3>
            <p className="text-gray-400">Your one-stop shopping destination</p>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-blue-300 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
            <Link to="/privacy" className="hover:text-blue-300 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-300 transition">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;