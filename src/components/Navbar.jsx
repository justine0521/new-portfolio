// Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

function Navbar({ containerStyles, activeTab, setActiveTab }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`${containerStyles}`}>
      <div className={`sticky z-10 right-5 p-5 ${isDarkMode ? 'bg-LightBlack' : 'bg-LightWhite'} px-10 rounded-bl-xl rounded-tr-xl 990:flex items-center gap-8`}>
        <button
          className={`${activeTab === 'About' ? 'text-Blue' : 'hover:text-Blue'}`}
          onClick={() => setActiveTab('About')}
        >
          About
        </button>

        <button
          className={`${activeTab === 'Project' ? 'text-Blue' : 'hover:text-Blue'}`}
          onClick={() => setActiveTab('Project')}
        >
          Project
        </button>

        <button
          className={`${activeTab === 'Education' ? 'text-Blue' : 'hover:text-Blue'}`}
          onClick={() => setActiveTab('Education')}
        >
          Resume
        </button>

        <button
          className={`${activeTab === 'Contact' ? 'text-Blue' : 'hover:text-Blue'}`}
          onClick={() => setActiveTab('Contact')}
        >
          Contact
        </button>

        <button onClick={toggleDarkMode}>
          {isDarkMode ? <MdOutlineLightMode /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
