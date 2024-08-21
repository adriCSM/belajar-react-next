'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState(true);
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="bg-gray-100 text-gray-600  ">
      {/* <SidebarAdmin showSidebar={sidebar} /> */}
      <div className={`w-full   `}>
        <NavbarAdmin onClick={changeSidebar} showSidebar={sidebar} />
        {children}
      </div>
    </div>
  );
}
