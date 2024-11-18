import React from 'react'
const statsData = [
    {
      icon: "edit_document",
      label: "Total Users",
      count: "24K",
      iconColor: "bg-[#6F4FF2]",
    },
    {
      icon: "edit_document",
      label: "Online",
      count: "82K",
      iconColor: "bg-[#50BB25]",
    },
    {
      icon: "edit_document",
      label: "Service Request",
      count: "200",
      iconColor: "bg-[#F9D62C]",
    },
    {
      icon: "edit_document",
      label: "Lead Request",
      count: "89",
      iconColor: "bg-[#28B5E1]",
    },
    {
      icon: "edit_document",
      label: "Active Service",
      count: "89",
      iconColor: "bg-[#167F71]",
    },
    {
      icon: "edit_document",
      label: "Complaints",
      count: "89",
      iconColor: "bg-[#DC3546]",
    },
  ];
  

const StatsCard = ({ icon, label, count, iconColor }) => {
     
        return (
          <div className="p-4 rounded-lg bg-white shadow-sm flex items-center space-x-4">
            <div
              className={`${iconColor} p-3 rounded-full flex items-center justify-center`}
            >
              <span className="material-symbols-outlined text-white text-2xl">
                {icon}
              </span>
            </div>
            <div>
              <span className="block text-lg font-semibold">{count}</span>
              <span className="block text-sm text-gray-500">{label}</span>
            </div>
          </div>
        );
      };
      

export default StatsCard;