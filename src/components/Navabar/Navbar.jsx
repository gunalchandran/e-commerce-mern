import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaBars, FaXmark } from "react-icons/fa6";
import DarkMode from '../Navabar/DarkMode';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 drop-shadow-md'>
      <div className='py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Left Side - Logo and Menu Links */}
          <div className='flex items-center gap-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl dark:text-white'>
              Shop
            </a>

            {/* Menu Links for larger screens */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white transition duration-200'>
                      {link.name}
                    </a>
                  </li>
                ))}

                {/* Dropdown */}
                <li className='relative cursor-pointer group'>
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duration-300' />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className='absolute hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white transition-all duration-200'>
                    <ul className='space-y-2'>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='text-xl text-gray-600 dark:text-gray-400'>
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
          
          {/* Right Side - Search bar and Cart */}
          <div className='flex items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Search'
                className='search-bar border border-gray-300 dark:border-gray-700 rounded-full py-2 px-4 pl-10 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200'
              />
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary transition duration-200 dark:text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3' />
            </div>

            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-blue-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='lg:hidden bg-white dark:bg-gray-900 dark:text-white p-4'>
            <ul className='space-y-4'>
              {MenuLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className='block text-gray-500 hover:text-black dark:hover:text-white'>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className='sm:hidden block text-gray-500 hover:text-black dark:hover:text-white'>
                  Quick Links
                </a>
                <ul className='ml-4 mt-2 space-y-5'>
                  {DropdownLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className='block text-gray-500 hover:text-black dark:hover:text-white'>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
