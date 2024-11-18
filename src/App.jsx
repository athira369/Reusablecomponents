import UserManagement from "./components/usermanagement/UserManagement";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar with fixed width */}
        <SideBar className="w-64 h-full bg-gray-800 text-white" />

        {/* Main Content */}
        <div className="flex-1 p-6 ">
          <Routes>
          <Route path="users" element={<UserManagement />} />
          </Routes>
          </div>
          </div>
          </Router>
  );
};
export default App;