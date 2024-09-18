import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full p-4 flex justify-around items-center gap-8 bg-transparent transition-colors duration-300">
      <div className="text-4xl font-bold text-gray-800">Logo</div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#home" className="font-bold text-gray-800 hover:text-teal-700">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-bold text-gray-800 hover:text-teal-700">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="font-bold text-gray-800 hover:text-teal-700">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="font-bold text-gray-800 hover:text-teal-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
