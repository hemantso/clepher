import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = React.memo(({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center mt-4">
    <button
      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="text-center">
      Page {currentPage} of {totalPages}
    </span>
    <button
      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
));

export default Pagination;
