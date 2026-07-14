import React from 'react'
import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';

const Filter = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-4 pb-0">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default Filter