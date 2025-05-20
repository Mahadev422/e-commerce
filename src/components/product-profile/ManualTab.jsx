
const ManualTab = () => {

  
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden p-6">
      <h2 className="text-xl font-bold mb-4">Manuals & Downloads</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium">User Manual</h3>
            <p className="text-sm text-gray-500">PDF • 2.4 MB</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download
          </button>
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium">Quick Start Guide</h3>
            <p className="text-sm text-gray-500">PDF • 1.1 MB</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download
          </button>
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium">Warranty Information</h3>
            <p className="text-sm text-gray-500">PDF • 0.8 MB</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManualTab
