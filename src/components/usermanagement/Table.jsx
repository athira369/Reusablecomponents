import React from 'react'


const Table = ({ columns, data, onRowClick }) => {
    return (
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-left border-b whitespace-nowrap">
            {columns.map((col, index) => (
              <th key={index} className="p-4 text-gray-600">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer border-b hover:bg-gray-50"
                onClick={() => onRowClick(row.id)}
              >
                {Object.values(row).map((value, index) => (
                  <td key={index} className="p-4">{value}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-gray-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };
  

export default Table