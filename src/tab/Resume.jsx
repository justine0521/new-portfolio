import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume() {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
      }, []);

  return (
    <ol className="my-10 m-10 relative  border-Blue" data-aos="fade-up">
        <li className="mb-10 ml-6 relative">
            <div className="absolute w-3 h-3 bg-Blue rounded-full -left-8 border border-white z-10"></div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2021 - 2025</time>
            <h3 className="w-fit text-lg font-semibold text-Blue">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h3>
            <p className="mb-4 w-4/5 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. In error cum voluptatibus quo consectetur soluta quos sunt praesentium debitis similique corporis architecto, accusamus quasi aut non. Veritatis ex quam nesciunt.</p>
        </li>
    
        <li className="mb-10 ml-6 relative">
            <div className="absolute w-3 h-3 bg-Blue rounded-full -left-8 border border-white z-10"></div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2020 - 2021</time>
            <h3 className="w-fit text-lg font-semibold text-Blue">GRADE 12 TVL-ICT</h3>
            <p className="mb-4 w-4/5 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, natus! Iste facilis consectetur reiciendis, corporis esse, corrupti doloremque, modi praesentium reprehenderit dolores similique iusto possimus omnis repellendus quis delectus qui.</p>
        </li>
    
        <li className="mb-10 ml-6 relative">
            <div className="absolute w-3 h-3 bg-Blue rounded-full -left-8 border border-white z-10"></div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2019 - 2020</time>
            <h3 className="w-fit text-lg font-semibold text-Blue">GRADE 11 TVL-ICT</h3>
            <p className="mb-4 w-4/5 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates! Corporis, tempora! Tenetur ducimus, provident est consectetur quis corporis facilis magnam dolorem unde. Odit laborum voluptatum dignissimos a ullam corporis.</p>
        </li>
    
        <li className="mb-10 ml-6 relative">
            <div className="absolute w-3 h-3 bg-Blue rounded-full -left-8 border border-white z-10"></div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2018 - 2019</time>
            <h3 className="w-fit text-lg font-semibold text-Blue">GRADE 10 ICT</h3>
            <p className="mb-4 w-4/5 text-base font-normal text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit esse harum quasi labore iure, illo vel repudiandae! Saepe molestias iste illum recusandae ipsum in? Amet dolorum ea unde tempore odit?</p>
        </li>
    </ol>
  )
}

export default Resume