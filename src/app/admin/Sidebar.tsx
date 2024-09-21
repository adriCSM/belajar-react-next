'use client';
import Tooltip from '@mui/material/Tooltip';
import { Manuale } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { menus } from '../../utils/menu';

export default function SidebarAdmin({ ...props }) {
  const show = props.showSidebar;
  const pathname = usePathname();

  return (
    <nav
      className={`fixed md:sticky top-0 h-[100vh] bg-white  transition-width transform duration-300  ${
        show ? 'md:w-[5%] -translate-x-full ' : 'w-3/5 md:w-[20%] translate-x-0 '
      }    z-30 md:transform-none`}
    >
      <div
        className={` w-full ${
          !show ? 'flex justify-center items-center' : ''
        }  items-center mx-auto  p-3 h-20 overflow-hidden border-b-2 border-gray-100 `}
      >
        <Link href={'/admin'} className="flex h-full  items-center justify-center md:justify-start">
          <Image
            src="/logo/icon-512x512.png"
            alt="logo"
            className={`${!show && ' animate-bounce'} z-100  `}
            width={!show ? 50 : 40}
            height={!show ? 50 : 40}
          />
          <h1
            className={`text-3xl font-bold ps-5 text-nowrap  transition-opacity duration-300 ${
              show ? 'opacity-0' : 'opacity-100'
            } `}
          >
            <span className="text-lime-600">m</span>
            <span className="text-gray-500">LITE</span>
          </h1>
        </Link>
      </div>

      <ul className={`pt-5 ps-2  overflow-hidden text-white  border-r-2 border-gray-100 `}>
        {menus.map((menu, i) => {
          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex px-3 py-2 items-center transition duration-150    transform text-black ${
                pathname == menu.href ? 'bg-lime-200 shadow-md' : 'hover:bg-lime-100'
              }  rounded-s-xl`}
            >
              <li className={`cursor-pointer flex`}>
                {show ? (
                  <Tooltip title={menu.name} placement="right">
                    <Image src={menu.src} alt={menu.name} width={30} height={30} key={menu.name} />
                  </Tooltip>
                ) : (
                  <Image src={menu.src} alt={menu.name} height={30} width={30} key={menu.name} />
                )}
                <p
                  className={` pl-5 text-nowrap  transition-opacity duration-300 ${
                    show ? 'opacity-0 ' : ' opacity-100'
                  }`}
                >
                  {menu.name}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
