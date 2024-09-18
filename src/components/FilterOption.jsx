import React from 'react';

const FilterOption = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={label} className="form-checkbox h-5 w-5 text-teal-700" />
      <label htmlFor={label} className="text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default FilterOption;
