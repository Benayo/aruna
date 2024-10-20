import React from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-300 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800">
          404
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-primary-100 text-white-100 text-white font-body  rounded-md shadow-md  transition-colors"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};
export default NotFound;
