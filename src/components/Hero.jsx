// Hero.js
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

import About from '../tab/About';
import Project from '../tab/Project';
import Project2 from '../tab/Project2';
import Resume from '../tab/Resume';
import Contact from '../tab/Contact';
import Header from './Header';

function Hero() {
  const [activeTab, setActiveTab] = useState('About');
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`w-9/12 h-full pl-5 rounded-2xl ${isDarkMode ? 'dark-mode' : 'light-mode'} font-mono z-10 overflow-auto no-scrollbar`}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'About' && <About />}
      {activeTab === 'Project' && <Project2 />}
      {activeTab === 'Education' && <Resume />}
      {activeTab === 'Contact' && <Contact />}
    </section>
  );
}

export default Hero;
