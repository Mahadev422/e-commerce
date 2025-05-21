import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { fetchUser } from '../store/fetch/user';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if(logged) {
      navigate('/');
    }
  },[logged]);

  const validateForm = (email ,password) => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    if (validateForm(formData.email, formData.password)) {
      // Simulate API call
      try {
        dispatch(fetchUser(formData));
        navigate('/');
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        e.target.reset();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/011/635/825/small/abstract-square-interface-modern-background-concept-fingerprint-digital-scanning-visual-security-system-authentication-login-vector.jpg')] bg-cover bg-center">
  <div className="w-full max-w-md backdrop-blur-sm bg-white/10 p-8 rounded-lg shadow-md">
    
    <div className="text-center">
      <h2 className="mt-6 text-3xl font-extrabold text-white">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <FiMail className="h-full p-2 rounded-l w-full bg-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              className={`block w-full px-11 py-2 border-2 ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md bg-white bg-opacity-20 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && <p className="mt-2 text-sm font-semibold text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <FiLock className="h-full w-full rounded-l p-2 bg-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              className={`block w-full px-11 py-2 border-2 ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md bg-white bg-opacity-20 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff className="h-5 w-5 text-gray-600 hover:text-gray-500" />
              ) : (
                <FiEye className="h-5 w-5 text-gray-600 hover:text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-sm font-semibold text-red-600">{errors.password}</p>}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between">
          <label htmlFor="remember-me" className="flex items-center text-sm text-white">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-blue-200 hover:text-blue-100 font-medium">
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            Sign in
          </button>
        </div>
      </form>

      {/* Divider and Social Buttons */}
      <div className="mt-6">
        <hr className="border-gray-300" />
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="ml-2">Google</span>
          </button>

          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaFacebook className="h-5 w-5 text-blue-600" />
            <span className="ml-2">Facebook</span>
          </button>
        </div>
      </div>

      {/* Create Account Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-white">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium hover:bg-blue-400 text-blue-200 rounded p-1 hover:text-blue-100">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginPage;