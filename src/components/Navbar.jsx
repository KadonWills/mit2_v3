import {useState} from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import {close, logo_light_png,logo_blue, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => setToggleMenu((prevToggle) => !prevToggle);
  

  return ( 
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={localStorage.theme != "dark" ? logo_blue : logo_light_png} alt="MiT²" className=" h-[40px]" />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`${(index === navLinks.length-1) ? 'mr-0' : 'mr-10'} font-batangas text-slate-800 dark:text-white hover:text-secondary dark:hover:text-accent cursor-pointer`}>
              <a href={`#${nav.id}`} className=' text-sm'>{nav.title}</a>
            </li>
          ))}
          <li>
              <ThemeSwitcher />
          </li>
        </ul>

        <div className='flex flex-1 items-center justify-end sm:hidden' >
            <img src={!toggleMenu ? menu : close} onClick={handleMenu} alt="menu" className='w-[28px] h-[28px] object-contain hover:scale-95 cursor-pointer ease-in-out dark:invert-0 invert' />

            <div className={
              `${toggleMenu ? 'flex' : 'hidden'}
              p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50
            `}>

              <ul className='list-none flex flex-col justify-end items-end flex-1'>
                {navLinks.map((nav, index) => (
                  <li key={nav.id + "-mobile"} className={`${(index === navLinks.length-1) ? 'mb-0' : 'mb-4'} font-batangas text-white hover:text-secondary dark:hover:text-accent cursor-pointer`}>
                    <a href={`#${nav.id}`} className=' text-sm font-batangas'>{nav.title}</a>
                  </li>
                ))}
                <li>
                    <ThemeSwitcher />
                </li>
              </ul>

            </div>
        </div>

    </nav>
  )
}

export default Navbar