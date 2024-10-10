import React, { useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Thumbnail1 from '../thumbnails/JavaScript_Essentials_1.png';
import Thumbnail2 from '../thumbnails/JavaScript_Essentials_2.png';
import Thumbnail3 from '../thumbnails/MERN_Certificate.png';
import Thumbnail4 from '../thumbnails/UDEMY_CSS_Javascript_Phyton.png';

import JSCertificate1 from '../pdf/JavaScript_Essentials_1.pdf';
import JSCertificate2 from '../pdf/JavaScript_Essentials_2.pdf';
import MernCertificate from '../pdf/MERN_Certificate.pdf';
import UdemyCertificate from '../pdf/UDEMY_CSS_Javascript_Phyton.pdf'

import Html from '../images/icons/html-5.png'
import Css from '../images/icons/css.png'
import Js from '../images/icons/javascript.png'
import Php from '../images/icons/php.png'
import Java from '../images/icons/java.png'
import ReactJs from '../images/icons/react.png'
import Github from '../images/icons/github.png'
import Cplus from '../images/icons/C++.png'
import Aws from '../images/icons/aws.png'
import Git from '../images/icons/git.png'
import Jira from '../images/icons/jira.png'
import MongoDB from '../images/icons/mongodb.png'
import Mysql from '../images/icons/mysql.png'
import Tailwind from '../images/icons/tailwind.png'
import Trello from '../images/icons/trello.png'
import VsCode from '../images/icons/vscode.png'
import Nodejs from '../images/icons/nodejs.png'

import { CgWebsite } from 'react-icons/cg';
import { FaWindows} from 'react-icons/fa';

import { useTheme } from '../context/ThemeContext';

const skills = {
    Language: [
      { name: 'Html', src: Html },
      { name: 'Css', src: Css },
      { name: 'Javascript', src: Js },
      { name: 'Php', src: Php },
      { name: 'Java', src: Java },
      { name: 'C++', src: Cplus },
    ],
    Framework: [
      { name: 'React', src: ReactJs },
      { name: 'Tailwind', src: Tailwind },
      { name: 'Node JS', src: Nodejs },
    ],
    Database: [
      { name: 'MongoDB', src: MongoDB },
      { name: 'Mysql', src: Mysql },
    ],
    Tools: [
      { name: 'Vs Code', src: VsCode },
      { name: 'AWS', src: Aws },
      { name: 'Git', src: Git },
      { name: 'Github', src: Github },
      { name: 'Jira', src: Jira },
      { name: 'Trello', src: Trello },
    ],
  };

function About() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [activeSkillTab, setActiveSkillTab] = useState('All');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 845,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      const renderSkills = () => {
        if (activeSkillTab === 'All') {
          return Object.values(skills).flat().map((skill, index) => (
            <SkillCard key={index} skill={skill} isDarkMode={isDarkMode}/>
          ));
        }
        return skills[activeSkillTab].map((skill, index) => (
          <SkillCard key={index} skill={skill} isDarkMode={isDarkMode}/>
        ));
      };

  return (
    <div className='overflow-auto'>
        <p className='py-5 pr-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestiae fugiat quod necessitatibus deserunt
            possimus sed expedita cum, sit unde, asperiores itaque molestias velit quasi delectus nobis facere rem minus.
            Explicabo porro, eum omnis expedita facilis reiciendis quisquam pariatur fuga, vitae temporibus maiores quam
            qui. Inventore animi unde quaerat recusandae delectus nihil, aut, eius voluptas commodi earum iusto. Earum,
            voluptatibus.
        </p>

        <div className='w-full pr-5'>
          <p className='text-2xl font-bold'>What I Do</p>

          <div className='grid grid-cols-1 990:grid-cols-2 gap-3 my-5 w-full'>
            <div className={`h-fit w-full p-6 px-3 ${isDarkMode ? 'bg-LightBlack' : 'bg-LightWhite'} flex items-center gap-x-3 rounded-md`}>
              <CgWebsite className='text-4xl w-32 text-Blue' />

              <div>
                <p className='font-bold mb-1'>Web Based Application</p>
                <p className='text-sm'>The most modern and high-quality website made at a professional level</p>
              </div>
            </div>

            <div className={`h-fit w-full p-6 px-3 ${isDarkMode ? 'bg-LightBlack' : 'bg-LightWhite'} flex items-center gap-x-3 rounded-md`}>
              <FaWindows className='text-4xl w-32 text-Blue' />

              <div>
                <p className='font-bold mb-1'>Window Based Application</p>
                <p className='text-sm'>High-quality development of systems at the professional level</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-4 mb-10'>
            <p className='font-bold text-2xl py-3'>Certificates</p>
            
            <Slider {...settings} className='mx-10'>
              <div className='w-64 h-56 rounded-lg transform transition-transform duration-300 hover:scale-110'>
                <a href={JSCertificate1} target='_blank' rel='noopener noreferrer'>
                  <img src={Thumbnail1} alt='Certificate' className='p-3 h-full object-cover rounded-lg' />
                </a>
              </div>

              <div className='w-64 h-56  rounded-lg transform transition-transform duration-300 hover:scale-110'>
                <a href={JSCertificate2} target='_blank' rel='noopener noreferrer'>
                  <img src={Thumbnail2} alt='Certificate' className='p-3 h-full object-cover rounded-lg' />
                </a>
              </div>

              <div className='w-64 h-56  rounded-lg transform transition-transform duration-300 hover:scale-110'>
                <a href={MernCertificate} target='_blank' rel='noopener noreferrer'>
                  <img src={Thumbnail3} alt='Certificate' className='p-3 h-full object-cover rounded-lg' />
                </a>
              </div>

              <div className='w-64 h-56  rounded-lg transform transition-transform duration-300 hover:scale-110'>
                <a href={UdemyCertificate} target='_blank' rel='noopener noreferrer'>
                  <img src={Thumbnail4} alt='Certificate' className='p-3 h-full object-cover rounded-lg' />
                </a>
              </div>

            </Slider>
        </div>

        {/* Skills */}
        <div>
            <p className='font-bold text-2xl'>My Skills</p>

            <div className='flex flex-wrap gap-5 mt-3'>
              <button className={`${activeSkillTab === 'All' ? 'text-Blue' : 'hover:text-Blue'} text-left`} onClick={() => setActiveSkillTab('All')}>
                All
              </button>

              <button className={`${activeSkillTab === 'Language' ? 'text-Blue' : 'hover:text-Blue'} text-left`} onClick={() => setActiveSkillTab('Language')}>
                Language
              </button>

              <button className={`${activeSkillTab === 'Framework' ? 'text-Blue' : 'hover:text-Blue'} text-left`} onClick={() => setActiveSkillTab('Framework')}>
                Framework/Library
              </button>

              <button className={`${activeSkillTab === 'Database' ? 'text-Blue' : 'hover:text-Blue'} text-left`} onClick={() => setActiveSkillTab('Database')}>
                Database
              </button>

              <button className={`${activeSkillTab === 'Tools' ? 'text-Blue' : 'hover:text-Blue'} text-left`} onClick={() => setActiveSkillTab('Tools')}>
                Tools
              </button>
            </div>

            <div className='flex flex-wrap gap-5 my-5'>
              {renderSkills()}
            </div>
        </div>
    </div>      
  )
}

const SkillCard = ({ skill, isDarkMode }) => (
    <div className={`w-28 h-28 p-6 flex flex-col gap-y-2 justify-center items-center ${isDarkMode ? 'bg-LightBlack' : 'bg-LightWhite'} rounded-lg`}>
      <img src={skill.src} alt={skill.name} className='h-12' />
      <p>{skill.name}</p>
    </div>
  );

export default About