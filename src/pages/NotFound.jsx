import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">

            <h1 className="text-6xl font-bold text-red-500 mb-4">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                Page Not Found
            </h2>

            <p className="text-gray-500 mb-6">
                The page you are looking for doesn't exist.
            </p>

            <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
                Go Back Home
            </Link>

        </div>

    );

}

export default NotFound;