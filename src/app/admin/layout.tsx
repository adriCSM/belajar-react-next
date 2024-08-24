'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const unShow = () => {
    setSidebar(!sidebar);
  };
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="bg-gray-100 text-gray-600  ">
      <SidebarAdmin showSidebar={sidebar} handleShow={unShow} />
      <div className={`w-full h-full container`}>
        <NavbarAdmin onClick={changeSidebar} showSidebar={sidebar} />
        {children}

        <FaRegSun
          onClick={changeMode}
          className="rounded-full  animate-pulse bg-gray-200 cursor-pointer h-12 w-12 p-2 me-5 text-lime-500 text-2xl z-auto fixed bottom-7 right-3 md:hidden"
        />
      </div>
    </div>
  );
}
