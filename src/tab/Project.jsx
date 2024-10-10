import React from 'react'

import Bms from '../images/project/BMS.jpg'
import Dental from '../images/project/DentalClinic.jpg'

import { FaGithub } from 'react-icons/fa';
import { IoMdLink } from "react-icons/io";

function Project() {
  return (
    <div className='my-10 flex flex-wrap items-center gap-5'>
        <div className='flex flex-col w-80 h-fit p-5 bg-LightBlack rounded-lg'>
            <img src={Bms} alt="" className='border h-32 rounded-lg'/>

            <p className='text-md text-center font-semibold my-2'>Barangay management System</p>
          
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam officiis praesentium deleniti ipsa rerum commodi. </p>

            <div className='flex items-center gap-3'>
              <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                React
              </p>

              <p className='bg-Blue mt-3 p-1 w-fit rounded-lg'>
                Tailwind
              </p>
            </div>

            <div className='flex justify-end items-center gap-3 mt-3'>
              <a href="" title='Source Code'>
                <FaGithub />
              </a>

              <a href="" title='Link'>
                <IoMdLink />
              </a>
            </div>
        </div>

        {/* Second Project */}
        <div className='flex flex-col w-80 h-fit p-5 bg-LightBlack rounded-lg'>
            <img src={Dental} alt="" className='border h-32 rounded-lg'/>

            <p className='text-md text-center font-semibold my-2'>Dental Booking System</p>
          
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam officiis praesentium deleniti ipsa rerum commodi. </p>

            <div className='flex items-center gap-3'>
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

            <div className='flex justify-end items-center gap-3 mt-3'>
              <a href="" title='Source Code'>
                <FaGithub />
              </a>

              <a href="" title='Link'>
                <IoMdLink />
              </a>
            </div>
        </div>

    </div>     
  )
}

export default Project