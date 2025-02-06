import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard, LuNotebookPen } from "react-icons/lu";
import { PiShippingContainerLight, PiSun, PiMoon, PiGear } from "react-icons/pi";
import { useLocation } from 'react-router-dom';
import { TfiBolt } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <LuLayoutDashboard /> },
  { name: 'Booking', path: '/booking', icon: <LuNotebookPen /> },
  { name: 'Tracking', path: '/tracking', icon: <PiShippingContainerLight /> },
  { name: 'Settings', path: '/settings', icon: <PiGear /> },
];

const TopNav = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const activeLink = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 p-2 z-50 ${
        isScrolled
          ? "bg-off-white-500/10 text-black dark:text-white dark:bg-off-black-200/80 backdrop-blur "
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <TfiBolt className="text-xl text-orange-500 dark:text-orange-300" />
          <span className="text-2xl">Tinkteq Logistics</span>
        </Link>
        <div className="flex gap-4 items-center md:hidden">
        <button onClick={toggleTheme} className="flex w-10 h-10 bg-white dark:bg-neutral-800 rounded-full justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              {theme === 'light' ? <PiSun /> : <PiMoon />}
            </button>
          <button onClick={toggleMenu} className="text-2xl flex w-10 h-10 bg-white dark:bg-neutral-800 rounded-full justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className="hidden md:flex gap-4 bg-neutral-900 dark:bg-neutral-800 text-white w-full  md:w-max p-1.5 rounded-full">
          {menuItems.map((item, index) => (
            <li key={index} className={` ${activeLink === item.path ? 'bg-white text-black' : 'text-gray-300'} py-2 px-4 rounded-full transition-colors duration-500 ease-in-out`}>
              <Link to={item.path} className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <button onClick={toggleTheme} className="flex w-10 h-10 bg-white dark:bg-neutral-800 rounded-full justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              {theme === 'light' ? <PiSun /> : <PiMoon />}
            </button>
          </li>
          <li className="flex items-center">
            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
            <span className="ml-2">Adewale Musa</span>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-neutral-900 dark:bg-neutral-800 text-white w-full p-4 rounded-lg mt-2">
          {menuItems.map((item, index) => (
            <li key={index} className={` ${activeLink === item.path ? 'bg-white text-black' : 'text-gray-300'} py-2 px-4 rounded-lg transition-colors duration-500 ease-in-out`}>
              <Link to={item.path} className="flex items-center" onClick={toggleMenu}>
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
          <li className="flex flex-col gap-4">
            <div className="flex items-center">
              <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
              <span className="ml-2">Adewale Musa</span>
            </div>
           
          </li>
        </ul>
      )}
    </nav>
  );
};

export default TopNav;