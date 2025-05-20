import { useEffect } from "react";

const Preference = () => {

  // useEffect(() => {
  //   const url = 'https://stoplight.io/mocks/metadapi/api/35903139/languages';
  //   const options = {
  //     method: 'GET',
  //     headers: {Accept: 'application/json', 'Ocp-Apim-Subscription-Key': '123'}
  //   };
  //   const lang = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   lang();
  // },[0]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Preferences</h2>
      <form>
        <div className="space-y-6">
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              id="language"
              name="language"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-3">Privacy Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="public-profile"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="public-profile" className="ml-3 block text-sm text-gray-700">
                  Make my profile public
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="data-sharing"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="data-sharing" className="ml-3 block text-sm text-gray-700">
                  Allow data sharing for product improvement
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

export default Preference;
