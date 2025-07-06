import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Find the Perfect Gift Today
      </h2>
      <div className="flex justify-center gap-4">
        <button className="bg-red-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-red-700 transition">
          Get Started
        </button>
        <button className="bg-gray-100 text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
