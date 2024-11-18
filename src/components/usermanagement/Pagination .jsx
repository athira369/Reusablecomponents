import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-between items-center mt-4">
        <span>
          Showing page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center space-x-2">
          <button
            className="text-gray-500"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            ◀️
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                i + 1 === currentPage ? 'bg-purple-600 text-white' : 'text-gray-500'
              }`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="text-gray-500"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            ▶️
          </button>
        </div>
      </div>
    );
  };
  

export default Pagination 