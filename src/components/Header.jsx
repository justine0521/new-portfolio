import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MdMenu, MdClose } from 'react-icons/md';

function Header({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getTitle = (activeTab) => {
    switch (activeTab) {
      case 'About':
        return 'About Me';
      case 'Project':
        return 'Project';
      case 'Education':
        return 'Education';
      case 'Contact':
        return 'Contact Form';
      default:
        return 'Default Title';
    }
  };

  useEffect(() => {
    document.title = getTitle(activeTab);
  }, [activeTab]);

  return (
    <header>
      <div className='flex justify-between w-full'>
        <p className='text-2xl py-3 font-bold border-b-4 border-blue-500 w-fit'>
          {getTitle(activeTab)}
        </p>

        <div>
          <div className="990:hidden flex items-center p-5">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <MdClose className="cursor-pointer mr-2 p-1 h-8 w-8" />
              ) : (
                <MdMenu className="cursor-pointer mr-2 p-1 h-8 w-8" />
              )}
            </button>
          </div>

          <Navbar
            containerStyles={`990:flex gap-x-5 xl:gap-x-10 ${menuOpen ? 'flex flex-col gap-y-4 absolute top-20 right-5 p-5 bg-gray-800 rounded-xl shadow-xl w-64 transition-all duration-300 z-50' : 'hidden'}`}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
