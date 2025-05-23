import { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addProduct } from "../store/slices/adminSlice";

const ProductForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discountPrice: "",
    description: "",
    features: [""],
    colors: [""],
    images: [],
    category: "",
    brand: "",
    stock: "",
    rating: 0,
    isNew: true,
    review: 0,
  });

  const [previewImages, setPreviewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData((prev) => ({ ...prev, features: [...prev.features, ""] }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...formData.colors];
    newColors[index] = value;
    setFormData((prev) => ({ ...prev, colors: newColors }));
  };

  const addColor = () => {
    setFormData((prev) => ({ ...prev, colors: [...prev.colors, ""] }));
  };

  const removeColor = (index) => {
    const newColors = formData.colors.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, colors: newColors }));
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "shopEase"); 

    const res = await fetch("https://api.cloudinary.com/v1_1/dpbwgyew7/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url; // <- Permanent image URL
  };

const handleImageUpload = async (e) => {
  const files = Array.from(e.target.files);

  const uploadedUrls = [];

  for (const file of files) {
    const url = await uploadImageToCloudinary(file);
    uploadedUrls.push(url);
  }

  setFormData({
    ...formData,
    images: [...formData.images, ...uploadedUrls],
  });
};


  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, images: newImages }));
    setPreviewImages(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    dispatch(addProduct(formData));

      setIsSubmitting(false);
      setSuccess(true);

      // Reset form after success
        setFormData({
          name: "",
          price: "",
          discountPrice: "",
          description: "",
          features: [""],
          colors: [""],
          images: [],
          category: "",
          brand: "",
          stock: "",
          rating: 0,
          isNew: true,
          review: 0
        });
        setPreviewImages([]);
  };

  if (success) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Added Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your product has been saved to the database.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
            onClick={() => setSuccess(false)}
          >
            Add Another Product
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white shadow rounded-lg overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New Product
            </h2>
            <p className="text-gray-600">Fill in the details of your product</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price* ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                      step="0.01"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Discount Price ($)
                    </label>
                    <input
                      type="number"
                      name="discountPrice"
                      value={formData.discountPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                      step="0.01"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Quantity*
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category*
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home & Kitchen</option>
                    <option value="beauty">Beauty</option>
                    <option value="sports">Sports & Outdoors</option>
                  </select>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand*
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </motion.div>
              </div>

              <div>
                {/* Features */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features
                  </label>
                  {formData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) =>
                          handleFeatureChange(index, e.target.value)
                        }
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter product feature"
                      />
                      {formData.features.length > 1 && (
                        <motion.button
                          type="button"
                          className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-full"
                          onClick={() => removeFeature(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 />
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                  <motion.button
                    type="button"
                    className="flex items-center text-blue-600 text-sm mt-2"
                    onClick={addFeature}
                    whileHover={{ x: 2 }}
                  >
                    <FiPlus className="mr-1" />
                    Add Feature
                  </motion.button>
                </div>

                {/* Colors */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Colors
                  </label>
                  {formData.colors.map((color, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <input
                        type="text"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(index, e.target.value)
                        }
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter color name/hex code"
                      />
                      {formData.colors.length > 1 && (
                        <motion.button
                          type="button"
                          className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-full"
                          onClick={() => removeColor(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 />
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                  <motion.button
                    type="button"
                    className="flex items-center text-blue-600 text-sm mt-2"
                    onClick={addColor}
                    whileHover={{ x: 2 }}
                  >
                    <FiPlus className="mr-1" />
                    Add Color
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 
                  focus:border-blue-500"
                  required
                ></textarea>
              </motion.div>
            </div>

            {/* image */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images* (Max 4)
            </label>
            <motion.div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#455bed]"
            >
              <div className="flex flex-col items-center justify-center">
                <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag & drop images here, or click to browse
                </p>
                <input
                  type="file"
                  id="image-upload"
                  className="hidden"
                  onChange={handleImageUpload}
                  multiple
                  accept="image/*"
                />
                <motion.label
                  htmlFor="image-upload"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Select Files
                </motion.label>
              </div>
            </motion.div>

            {formData.images.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {formData.images.map((url, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={url}
                        alt={`Preview ${index}`}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <motion.button
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        onClick={() => removeImage(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiX className="w-3 h-3" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.images.length} of 4 images selected
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving Product...
                  </>
                ) : (
                  "Save Product"
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductForm;
