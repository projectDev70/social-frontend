import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-white text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Platform</h1>
      <p className="mt-6 text-lg text-gray-600">
        Find the best contractors around you.
      </p>
      <button className="mt-8 px-8 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors duration-300">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
