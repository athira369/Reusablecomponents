import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-[200vh] bg-customPurple text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">home</span>
          <h3>Dashboard</h3>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">group</span>
          <h3>Users</h3>
        </NavLink>

        <NavLink
          to="/service-providers"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">construction</span>
          <h3>Service Providers</h3>
        </NavLink>

        <NavLink
          to="/franchisees"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">currency_franc</span>
          <h3>Franchisee</h3>
        </NavLink>

        <NavLink
          to="/finance"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">finance</span>
          <h3>Finance</h3>
        </NavLink>

        <NavLink
          to="/accounts"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">account_balance</span>
          <h3>Accounts</h3>
        </NavLink>

        <NavLink
          to="/EditProfile"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">person</span>
          <h3>Profile</h3>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive
              ? 'bg-customLightBlue text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <h3>Chat</h3>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'bg-customLightBlue text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">settings</span>
          <h3>Settings</h3>
        </NavLink>

        <NavLink
          to="/service-management"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">stacks</span>
          <h3>Service Management</h3>
        </NavLink>

        <NavLink
          to="/AdsManagement"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">headphones</span>
          <h3>Ads Management</h3>
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-600 text-white flex items-center space-x-3 p-4 rounded'
              : 'text-white flex items-center space-x-3 p-4'
          }
        >
          <span className="material-symbols-outlined text-lg">notifications</span>
          <h3>Notifications</h3>
        </NavLink>
      </nav>
      <div className="p-4">
        <p className="text-sm">Service Connect</p>
        <p className="text-xs">Let’s Grow Together</p>
      </div>
    </div>
  );
}

export default Sidebar;
