import React from "react";

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="w-full sm:w-auto flex items-center gap-2">
      <label className="text-sm font-semibold text-gray-600 whitespace-nowrap">
        Category:
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full sm:w-48 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
