import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-indigo-500 text-white shadow-sm"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            <span className="font-bold text-lg text-gray-800">Assessments</span>

            <div className="flex items-center space-x-4">
              <NavLink to="/MultiStepForm" className={linkStyle}>
                Task 1
              </NavLink>
              <NavLink to="/ProductList" className={linkStyle}>
                Task 2
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
