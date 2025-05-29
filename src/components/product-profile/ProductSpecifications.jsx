import { useState } from 'react';
import SpecificationTab from './SpecificationTab';
import Desciption from './DesciptionTab';
import ManualTab from './ManualTab';

const ProductSpecifications = () => {
  const [activeTab, setActiveTab] = useState('specs');


  // Sample product data
  const product = {
    name: "Premium Wireless Noise-Cancelling Headphones",
    sku: "HP-X9000",
    brand: "AudioMaster",
    specifications: {
      general: [
        { name: "Model Number", value: "X9000" },
        { name: "Color", value: "Matte Black" },
        { name: "Product Weight", value: "256g" },
        { name: "Included Items", value: "Headphones, Carrying Case, USB-C Cable, 3.5mm Audio Cable" }
      ],
      technical: [
        { name: "Driver Size", value: "40mm" },
        { name: "Frequency Response", value: "20Hz - 20kHz" },
        { name: "Impedance", value: "32Ω" },
        { name: "Bluetooth Version", value: "5.0" },
        { name: "Wireless Range", value: "10m (33ft)" },
        { name: "Battery Life", value: "30 hours (ANC on), 38 hours (ANC off)" },
        { name: "Charging Time", value: "2 hours (USB-C)" },
        { name: "Noise Cancellation", value: "Active Noise Cancellation (ANC)" },
        { name: "Microphone", value: "Built-in with noise reduction" }
      ],
      dimensions: [
        { name: "Headphone Dimensions", value: "18.5 x 17.5 x 8 cm" },
        { name: "Ear Cup Diameter", value: "10 cm" },
        { name: "Headband Length", value: "Adjustable 15-20 cm" }
      ],
      warranty: [
        { name: "Warranty Period", value: "2 years" },
        { name: "Warranty Type", value: "Manufacturer warranty" },
        { name: "Coverage", value: "Defects in materials and workmanship" }
      ]
    }
  };

  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-12">

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8 overflow-x-scroll scroll">
          <button
            onClick={() => setActiveTab('specs')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'specs' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'features' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'manual' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Manuals & Downloads
          </button>
        </nav>
      </div>

      {/* Specifications Content */}
      {activeTab === 'specs' && <SpecificationTab product={product} />}

      {/* Features Content */}
      {activeTab === 'features' && <Desciption />}

      {/* Manuals & Downloads Content */}
      {activeTab === 'manual' && <ManualTab />}
    </div>
  );
};

export default ProductSpecifications;