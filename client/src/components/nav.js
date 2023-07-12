import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-xl tracking-tight">Server Analytics</div>
        <div className="space-x-4">
          <a href="/" className="text-teal-200 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-teal-200 hover:text-white">
            About
          </a>
          <a href="/contact" className="text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
