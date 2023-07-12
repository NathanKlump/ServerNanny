import React from 'react';

import { Auth } from './auth';

function Navbar({user, setUser}) {
  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold text-xl pl-2">Server Analytics</div>
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
        <Auth 
        user={user} 
        setUser={setUser}
      />
      </div>
    </nav>
  );
}

export default Navbar;
