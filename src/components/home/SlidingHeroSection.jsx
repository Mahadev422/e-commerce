import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SlidingHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2023",
      subtitle: "Discover our new arrivals",
      description: "Get ready for summer with our latest fashion collection",
      buttonText: "Shop Now",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-gradient-to-r from-amber-100 to-amber-50"
    },
    {
      id: 2,
      title: "Tech Gadgets Sale",
      subtitle: "Up to 40% off",
      description: "The best deals on electronics and smart devices",
      buttonText: "Explore Deals",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-100"
    },
    {
      id: 3,
      title: "Home & Living",
      subtitle: "Refresh your space",
      description: "Beautiful home decor for every style",
      buttonText: "Browse Collection",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-gradient-to-r from-emerald-50 to-teal-100"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative mb-10 w-full h-[60vh] max-h-[600px] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className={`absolute inset-0 ${slides[currentSlide].bgColor} flex items-center`}
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 lg:w-2/5 text-center md:text-left mb-10 md:mb-0">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 mb-6"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:w-1/2 lg:w-3/5 flex justify-center"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="max-h-[60vh] object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition z-10"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition z-10"
        aria-label="Next slide"
      >
        <FiChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition ${currentSlide === index ? 'bg-black w-6' : 'bg-gray-400 bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingHeroSection;