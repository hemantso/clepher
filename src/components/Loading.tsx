import React from 'react';

const Loading: React.FC = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    <p className="ml-4 text-blue-500 text-xl">Loading...</p>
  </div>
);

export default Loading;
