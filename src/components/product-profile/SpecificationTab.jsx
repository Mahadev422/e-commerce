import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SpecificationTab = ({ product }) => {
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    technical: false,
    dimensions: false,
    warranty: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      {/* General Specifications */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('general')}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <h2 className="text-lg font-medium text-gray-900">General Specifications</h2>
          {expandedSections.general ? (
            <FiChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {expandedSections.general && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.general.map((spec, index) => (
                <div key={index} className="py-2">
                  <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Technical Specifications */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('technical')}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <h2 className="text-lg font-medium text-gray-900">Technical Specifications</h2>
          {expandedSections.technical ? (
            <FiChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {expandedSections.technical && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.technical.map((spec, index) => (
                <div key={index} className="py-2">
                  <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Dimensions */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('dimensions')}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <h2 className="text-lg font-medium text-gray-900">Dimensions & Weight</h2>
          {expandedSections.dimensions ? (
            <FiChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {expandedSections.dimensions && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.dimensions.map((spec, index) => (
                <div key={index} className="py-2">
                  <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Warranty */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection('warranty')}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <h2 className="text-lg font-medium text-gray-900">Warranty Information</h2>
          {expandedSections.warranty ? (
            <FiChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {expandedSections.warranty && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.warranty.map((spec, index) => (
                <div key={index} className="py-2">
                  <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpecificationTab;
