import React from 'react'
const SearchFilter = ({ searchTerm, setSearchTerm, options, onNewUser }) => {
    return (
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, ID or Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 p-2 border rounded-lg"
        />
        <div className="flex items-center space-x-4">
          <select className="bg-[#4D44B5] text-white p-2 rounded-lg">
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <button
            onClick={onNewUser}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg"
          >
            + New User
          </button>
        </div>
      </div>
    );
  };
  


export default SearchFilter;