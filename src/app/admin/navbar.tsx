import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AccountMenu from '@/components/Elements/AccountMenu';
import { useState,useEffect } from 'react';
export default function NavbarAdmin({ onClick, showSidebar }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(showSidebar);

  useEffect(() => {
    setIsSidebarVisible(showSidebar);
  }, [showSidebar]);
  
  return (
    <nav
      className={`w-full flex h-20 bg-white px-5  justify-between rounded-br-xl p-3 z-10 sticky top-0 border-b-2 border-gray-100 items-center`}
    >
      
        
          {isSidebarVisible ?<FaChevronRight className="text-2xl text-lime-400 cursor-pointer"  onClick={onClick}/> : <FaChevronLeft className="text-2xl text-lime-400 cursor-pointer" onClick={onClick} />}
      
      
      <div>
        <ul className="flex items-center text-[1.4rem]">
          <li>
            {/* <AccountMenu
              className="h-10 w-10 ring-2 ring-lime-500 rounded-full"
              src={'/images/img-person.jpg'}
            /> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
