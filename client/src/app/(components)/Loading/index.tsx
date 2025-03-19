import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      {/* Spinner Container */}
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
        {/* Inner Ring */}
        <div className="absolute w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow-reverse top-5 left-4"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;