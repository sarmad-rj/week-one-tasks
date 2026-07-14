import React from "react";

const INTERESTS_LIST = ["Sports", "Music", "Coding", "Reading"];

const PreferencesStep = ({ formData, errors, updateFields }) => {
  const handleInterestChange = (interest, checked) => {
    const updatedInterests = checked
      ? [...formData.interests, interest]
      : formData.interests.filter((item) => item !== interest);

    updateFields({ interests: updatedInterests });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Preferences</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          value={formData.country}
          onChange={(e) => updateFields({ country: e.target.value })}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-all"
        >
          <option value="">Select a country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="KSA">KSA</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">Please select a country</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Interests
        </label>
        <div className="space-y-2">
          {INTERESTS_LIST.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={(e) =>
                  handleInterestChange(interest, e.target.checked)
                }
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && (
          <p className="text-red-500 text-xs mt-1">
            Please pick at least one interest
          </p>
        )}
      </div>
    </div>
  );
};

export default PreferencesStep;
