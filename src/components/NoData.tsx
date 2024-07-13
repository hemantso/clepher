import React from 'react';

const NoData: React.FC = () => (
  <div className="flex justify-center items-center h-64">
    <div className="flex items-center text-gray-500">
      <svg
        className="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6"
        ></path>
      </svg>
      <p className="text-xl">No data available</p>
    </div>
  </div>
);

export default NoData;
