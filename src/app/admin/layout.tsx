'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { pasien } from '@/utils/pasien';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="#fafafa text-gray-600  ">
      <div className="flex">
        <SidebarAdmin showSidebar={sidebar} />
        <div
          onClick={changeSidebar}
          className={`fixed inset-0 bg-black opacity-50 z-20 ${
            sidebar ? 'hidden' : 'block'
          }  md:hidden`}
        ></div>
        <div className="w-full ">
          <NavbarAdmin onClick={changeSidebar} showSidebar={sidebar} />
          <div className="container mx-auto">{children}</div>
          <div
            className={`${
              darkMode ? 'bg-white ring-2  ring-amber-500' : 'bg-black ring-2 ring-white'
            } fixed bottom-5 right-5 md:bottom-5 md:right-5 shadow-md rounded-full h-12 w-12 z-50 flex justify-center text-2xl items-center`}
            onClick={changeMode}
          >
            {darkMode ? (
              <BsSunFill className="text-amber-500 animate-pulse" />
            ) : (
              <BsFillMoonStarsFill className="text-white animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
