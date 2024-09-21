'use client';
import SidebarAdmin from './Sidebar';
import NavbarAdmin from './navbar';
import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { pasien } from '@/utils/pasien';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';

export default function AdminLayout({ children }: { children: any }) {
  const [sidebar, setSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [pasiens, setPasien] = useState(pasien);

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
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
          <div className="container mx-auto">
            <Provider store={storeRef.current}>{React.cloneElement(children)}</Provider>
          </div>
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
