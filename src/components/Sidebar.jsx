import Picture from '../images/picture.png'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline, IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Sidebar() {
  const texts = ["Frontend Developer", "Collage Student"];
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTyping(false);
    }, 3500);

    const timeout2 = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setTyping(true);
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [textIndex]);

  return (
    <aside className={`w-72 h-full ${isDarkMode ? 'dark-mode' : 'light-mode' } text-white font-mono rounded-2xl py-5 z-10`}>
      <div className='fade flex flex-col justify-center items-center'>

        <div className='h-72 w-44 border-b'>
          <img src={Picture} alt="" className='w-44 h-44 border rounded-2xl'/>

          <p className='my-3 text-xl text-center'>Justine Santos</p>

          <p className='text-xl w-fit'>
            {typing && <span className="typing-animation">{texts[textIndex]}</span>}
          </p>
        </div>

        <div className='w-full px-3'>
          <div className='flex items-center justify-start gap-3 pt-5 '>
            <div className='w-8 h-8 border border-Blue flex justify-center items-center rounded-xl text-xl text-Blue'>
              <MdOutlineEmail className=''/>
            </div>

            <div className='text-sm '>
              <p>EMAIL</p>
              <p>justinesantos2105@gmail.com</p>
            </div>
          </div>

          <div className='flex items-center justify-start gap-3 pt-5 '>
            <div className='w-8 h-8 border border-Blue flex justify-center items-center rounded-xl text-xl text-Blue'>
              <IoPhonePortraitOutline className=''/>
            </div>

            <div className='text-sm '>
              <p>PHONE</p>
              <p>+(63) 961 977 1972</p>
            </div>
          </div>  

          <div className='flex items-center justify-start gap-3 pt-5 '>
            <div className='w-8 h-8 border border-Blue flex justify-center items-center rounded-xl text-xl text-Blue'>
              <IoLocationSharp className=''/>
            </div>

            <div className='text-sm '>
              <p>LOCATION</p>
              <p>Bataan, Philippines</p>
            </div>
          </div>  
        </div>

        <div className='flex gap-3 pt-4 text-lg'>
          <div className='hover:text-Blue'>
            <NavLink to={'https://www.facebook.com/profile.php?id=100009771407385'}>
              <FaFacebook />
            </NavLink>
          </div>

          <div className='hover:text-Blue'>
            <NavLink to={'https://www.instagram.com/jstnn_eu/?hl=en'}>
              <FaInstagram />
            </NavLink>
          </div>

          <div className='hover:text-Blue'>
            <NavLink to={'https://github.com/justine0521'}>
              <FaGithub />
            </NavLink>
          </div>

          <div className='hover:text-Blue'>
            <NavLink to={'https://www.linkedin.com/in/santos-justine-r-0303a7243/'}>
              <FaLinkedin />
            </NavLink>
          </div>
        </div>

      </div>

    </aside>
  )
}

export default Sidebar