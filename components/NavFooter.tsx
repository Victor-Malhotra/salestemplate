import React from 'react';

const NavFooter = () => {
  return (
    <footer className="bg-white text-gray-900 py-4">
      <div className="container flex justify-between items-center">
        <p className="text-xs">Copyright ©2023 My Website</p>
        <div className="flex">
          <a href="#" className="text-xs mr-2">
            Privacy Policy
          </a>
          <a href="#" className="text-xs">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NavFooter;