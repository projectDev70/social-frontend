import React from 'react';
import ContractorFilters from './ContractorFilters'; // Import ContractorFilters
import ContractorProfileCard from './ContractorProfileCard'; // Import ContractorProfileCard

const contractors = [
  { 
    name: 'John Doe', 
    image: 'https://via.placeholder.com/100', 
    rating: 4.5, 
    description: 'Experienced handyman in your area.' 
  },
  { 
    name: 'Jane Smith', 
    image: 'https://via.placeholder.com/100', 
    rating: 5, 
    description: 'Professional plumber with 10 years of experience.' 
  }
];

const ContractorProfile = () => {
  return (
    <div className="flex justify-center gap-8 py-12 bg-gray-100">
      <ContractorFilters />
      <div className="flex flex-col gap-6">
        {contractors.map((contractor, index) => (
          <ContractorProfileCard key={index} contractor={contractor} />
        ))}
      </div>
    </div>
  );
};

export default ContractorProfile;
