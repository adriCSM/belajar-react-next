'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState(false);
  const unShow = () => {
    setSidebar(!sidebar);
  };
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="bg-gray-100 text-gray-600  ">
      <SidebarAdmin showSidebar={sidebar} handleShow={unShow} />
      <div className={`w-full   `}>
        <NavbarAdmin onClick={changeSidebar} showSidebar={sidebar} />
        <FaRegSun className="rounded-full bg-gray-200  h-12 w-12 p-2 me-5 text-lime-500 text-2xl z-auto absolute bottom-12 right-3 md:hidden" />
        {children}
      </div>
    </div>
  );
}
