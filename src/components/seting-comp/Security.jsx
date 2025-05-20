
const Security = () => {

  return (
    <div className="p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-md font-medium text-gray-900 mb-3">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Update Password
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-600 mb-4">
            Add an extra layer of security to your account by enabling two-factor authentication.
          </p>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            Enable 2FA
          </button>
        </div>
      </div>
    </div>
  )
}

export default Security;
