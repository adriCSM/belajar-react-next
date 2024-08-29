'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

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
    <div className="bg-gray-100 text-gray-600  ">
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
          <div className="container mx-auto ">{children}</div>
        </div>
      </div>
    </div>
  );
}
