import React from "react";

const PersonalInfoStep = ({ formData, errors, updateFields }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Personal Info</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFields({ name: e.target.value })}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          placeholder="Sarmad"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">Please enter your name</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoStep;
