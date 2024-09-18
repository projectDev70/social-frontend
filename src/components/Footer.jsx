import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#facebook" className="text-xl hover:text-teal-400">
          Facebook
        </a>
        <a href="#twitter" className="text-xl hover:text-teal-400">
          Twitter
        </a>
        <a href="#linkedin" className="text-xl hover:text-teal-400">
          LinkedIn
        </a>
      </div>
      <p className="text-sm">
        &copy; 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
