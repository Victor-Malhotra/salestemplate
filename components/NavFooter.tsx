import React from 'react';

const NavFooter = () => {
  return (
    <footer className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
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