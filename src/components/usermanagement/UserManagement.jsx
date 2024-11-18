import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import StatsCard from "./StatsCard";
import SearchFilter from "./SearchFilter";
import Table from "./Table";
import Pagination from "./Pagination";
import TableData from './TableData';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const users = [/* User data */];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 text-gray-800">
      <UserHeader />

      {/* Stats Section */}
    
<div className="grid grid-cols-6 gap-4 mb-6">
  {statsData.map((stat, index) => (
    <StatsCard
      key={index}
      icon={stat.icon}
      label={stat.label}
      count={stat.count}
      iconColor={stat.iconColor}
    />
  ))}
</div>
 

      {/* Search Section */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        options={['Newest', 'Oldest']}
        onNewUser={() => navigate('/newuser')}
      />

      {/* Table Section */}
      <Table
  columns={[
    'Name', 'ID', 'Date', 'Total Completed Services', 'Location', 'Contact', 'Status', 'Action'
  ]}
  data={filteredUsers.map(user => ({
    name: user.name,
    id: user.id,
    date: user.date,
    services: user.services,
    location: user.location,
    contact: '•••', // Placeholder, replace with buttons as needed
    status: (
      <span className={`px-3 py-1 rounded-full text-white ${user.status === 'Active' ? 'bg-[#64FC3E]' : 'bg-[#FB7D5B]'}`}>
        {user.status}
      </span>
    ),
    action: '•••', // Placeholder
  }))}
  onRowClick={(id) => navigate(`/users/${id}`)}
/>


      {/* Pagination */}
      <Pagination 
      currentPage={1} 
      totalPages={10} 
      onPageChange={(page) => console.log('Change to page:', page)}
      />
    </div>
  );
};

export default UserManagement;
