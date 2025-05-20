import React from 'react'

const Notification = () => {


  return (
    <div className="p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h2>
      <form>
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">Email Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-notifications"
                  name="email"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="email-notifications" className="ml-3 block text-sm text-gray-700">
                  Receive email notifications
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">SMS Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sms-notifications"
                  name="sms"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sms-notifications" className="ml-3 block text-sm text-gray-700">
                  Receive SMS notifications
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">Push Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="push-notifications"
                  name="push"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="push-notifications" className="ml-3 block text-sm text-gray-700">
                  Receive push notifications
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  )
}

export default Notification;
