import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

import Bms from '../images/project/BMS.jpg';
import Dental from '../images/project/DentalClinic.jpg';
import ECommerce from '../images/project/E-Commerce.jpg'

import { FaGithub } from 'react-icons/fa';
import { IoMdLink } from "react-icons/io";
import { RiInformation2Line } from "react-icons/ri";

function Project2() {
    const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section className='mr-5 mt-10'>
        <div className='flex flex-col justify-center items-center gap-y-10'>
            {/* Latest Project */}
            <div className={`fade w-full h-fit text-white ${isDarkMode ? 'bg-Dark' : 'bg-LightWhite text-black'} flex flex-col 990:flex-row justify-center sticky top-10 border-2 ${isDarkMode ? 'border-LightBlack' : 'border-gray-400'} rounded`}>
                <div className=''>
                    <img src={Bms}  alt="Barangay Management System"  className='w-full rounded'/>
                </div>

                <div className='w-full p-3'>
                    <div className='flex items-start justify-between'>
                        <p className='text-xl'>Barangay management system</p>

                        <div className='flex gap-3 mt-2 md:mt-0'>
                            <a href="" title='Source Code'><FaGithub /></a>
                            <a href="" title='View'><IoMdLink /></a>
                            <a href="" title='Details'><RiInformation2Line /></a>
                        </div>
                    </div>

                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className={`flex flex-wrap gap-3 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                            React
                        </p>
                        <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                            Tailwind
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Project */}
            <div className={`fade w-full h-fit text-white ${isDarkMode ? 'bg-Dark' : 'bg-LightWhite text-black'} flex flex-col 990:flex-row justify-center sticky top-12 border-2 ${isDarkMode ? 'border-LightBlack' : 'border-gray-400'} rounded`}>
                <div className=''>
                    <img src={ECommerce}  alt="Niek"  className='w-full rounded'/>
                </div>

                <div className='w-full p-3'>
                    <div className='flex items-start justify-between'>
                        <p className='text-xl'>Niek</p>

                        <div className='flex gap-3 mt-2 md:mt-0'>
                            <a href="" title='Source Code'><FaGithub /></a>
                            <a href="" title='View'><IoMdLink /></a>
                            <a href="" title='Details'><RiInformation2Line /></a>
                        </div>
                    </div>

                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <div className={`flex flex-wrap gap-3 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                            React
                        </p>
                        <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                            Tailwind
                        </p>
                    </div>
                </div>
            </div>

            {/* First Project */}
            <div className={`fade w-full h-fit text-white ${isDarkMode ? 'bg-Dark' : 'bg-LightWhite text-black'} flex flex-col 990:flex-row justify-center sticky top-14 border-2 ${isDarkMode ? 'border-LightBlack' : 'border-gray-400'} rounded`}>
                <div>
                    <img src={Dental} alt="" className='w-full rounded'/>
                </div>

                <div className='w-full p-3 h-full'>
                    <div className='flex justify-between'>
                        <p className='text-xl'>KFC Dental Clinic</p>

                        <div className='flex gap-3'>
                            <a href="https://github.com/justine0521/KFC-Dental-Clinic" title='Source Code'>
                                <FaGithub />
                            </a>

                            <a href="https://kfcdentalclinic.netlify.app/" title='View'>
                                <IoMdLink />
                            </a>
                            <a href="" title='Details'><RiInformation2Line /></a>
                        </div>
                    </div>

                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                
                    <div className={`flex flex-wrap gap-3 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        <p className=' bg-orange-700 mt-3 p-1 w-fit rounded-lg'>
                            Html
                        </p>

                        <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                            Css
                        </p>

                        <p className=' bg-yellow-500 mt-3 p-1 w-fit rounded-lg'>
                            Javascript
                        </p>

                        <p className=' bg-violet-500 mt-3 p-1 w-fit rounded-lg'>
                            Php
                        </p>
                    </div>
                </div>
            </div>

            <footer className='h-screen'></footer>
        </div>
    </section>
  )
}

export default Project2;
