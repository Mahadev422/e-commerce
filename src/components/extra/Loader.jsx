import { motion } from "framer-motion";

const Loader = () => {
  const dotVariants = {
    initial: { y: "0%" },
    animate: {
      y: ["0%", "-100%", "0%"],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      <motion.div
        className="flex space-x-3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-blue-600"
            variants={dotVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
