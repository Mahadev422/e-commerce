export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2 mb-6 max-w-md text-center">
        Sorry, we couldn’t find the page you’re looking for. It might have been removed or you typed the URL incorrectly.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go back home
      </a>
    </div>
  );
}
