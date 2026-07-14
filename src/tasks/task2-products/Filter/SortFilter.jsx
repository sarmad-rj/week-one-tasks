import React from "react";

const SortFilter = ({ sortBy, setSortBy }) => {
  return (
    <div className="w-full sm:w-auto flex items-center gap-2">
      <label className="text-sm font-semibold text-gray-600 whitespace-nowrap">
        Sort By:
      </label>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full sm:w-48 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        <option value="default">Select Option</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortFilter;
