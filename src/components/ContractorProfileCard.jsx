import React from 'react';
import RatingStars from './RatingStars'; // Import the RatingStars Component

const ContractorProfileCard = ({ contractor }) => {
  return (
    <div className="flex bg-white p-6 rounded-lg shadow-lg max-w-lg text-left gap-4">
      <img
        src={contractor.image}
        alt="contractor"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{contractor.name}</h3>
        <RatingStars rating={contractor.rating} />
        <p className="text-gray-600">{contractor.description}</p>
        <div className="mt-4 flex gap-4">
          <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractorProfileCard;
