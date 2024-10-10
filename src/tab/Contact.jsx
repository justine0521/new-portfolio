import React from 'react'

import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div className='my-16'>
        <form action="" className='flex flex-col gap-5 mr-5'>
            <div className='flex justify-center gap-5'>
              <input type="text" placeholder='Full name' className='bg-transparent w-1/2 p-2 border border-LightBlack rounded-lg outline-none'/>

              <input type="email" placeholder='Email address' className='bg-transparent w-1/2 p-2 border border-LightBlack rounded-lg outline-none'/>
            </div>

            <textarea name="" id="" placeholder='Your Message' className='bg-transparent p-3 h-56 border border-LightBlack rounded-lg outline-none resize-none'>

            </textarea>

            <div className='flex justify-end'>
              <button className='border border-LightBlack text-Blue font-semibold flex justify-center items-center gap-2 p-3 w-fit rounded-lg hover:bg-Blue hover:text-white '>
                <FiSend />
                Send Message
              </button>
            </div>
        </form>
    </div>      
  )
}

export default Contact