import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSignup } from '../store/fetch/user';

const SignupPage = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };

  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    if(validate(formData)) {
      dispatch(fetchSignup(formData));
      e.target.reset();
      navigate('/');
    };  
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-indigo-600 py-4 px-6">
          <h2 className="text-2xl font-bold text-white text-center">Create Your Account</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="1234567890"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="123 Main St, City, Country"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200'
            >
              Sign Up
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/log-in" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default SignupPage;
