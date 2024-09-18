import React from 'react';
import FilterOption from './FilterOption'; // Import the FilterOption Component

const ContractorFilters = () => {
  return (
    <div id="filters" className="w-64 bg-white rounded-lg p-6 shadow-lg">
      <div className="filter-section">
        <h3 className="text-xl text-gray-800">Filters</h3>
        <FilterOption label="Has Reviews" />
        <FilterOption label="Has Ratings" />
        <FilterOption label="Verified Contractors" />
      </div>
      <div className="filter-section">
        <h3 className="text-xl text-gray-800">Distance</h3>
        <input type="range" className="slider w-full" />
      </div>
    </div>
  );
};

export default ContractorFilters;
