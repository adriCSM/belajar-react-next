'use client';
import Tooltip from '@mui/material/Tooltip';
import { Manuale } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export default function SidebarAdmin({ ...props }) {
  const show = props.showSidebar;
  const pathname = usePathname();

  const menus = [
    {
      name: 'Menu',
      href: '/admin/menu',
      src: '/icons/icon-home.png',
    },
    {
      name: 'Pasien',
      href: '/admin/pasien',
      src: '/icons/icon-pasien.png',
    },
    {
      name: 'IGD',
      href: '/admin/igd',
      src: '/icons/icon-igd.png',
    },
    {
      name: 'Rawat Jalan',
      href: '/admin/rawat_jalan',
      src: '/icons/icon-ralan.png',
    },
    {
      name: 'Rawat Inap',
      href: '/admin/rawat_inap',
      src: '/icons/icon-ranap.png',
    },
    {
      name: 'Anjungan',
      href: '/admin/anjungan',
      src: '/icons/icon-informasi.png',
    },
  ];
  return (
    <nav
      className={`sticky top-0 h-[100vh]  transition-width transform duration-300   rounded-br-xl bg-gradient-to-tr from-lime-500 to-lime-400  ${
        show ? 'w-[5%] ' : 'w-[20%]'
      }   divide-y divide-white z-20`}
    >
      <div
        className={` w-full ${
          !show ? 'flex justify-center items-center' : ''
        }  items-center mx-auto  p-3 h-24 overflow-hidden`}
      >
        <Link href={'/admin'} className="flex h-full  items-center ">
          <img
            src="/logo/icon-512x512.png"
            alt=""
            className={`${!show ? 'h-[50px]' : 'h-[40px] w-[40px] animate-bounce'} z-100  `}
          />
          <h1
            className={`text-3xl font-bold ps-5 text-nowrap  transition-opacity duration-300 ${
              show ? 'opacity-0' : 'opacity-100'
            } `}
          >
            <span className="text-lime-600">m</span>
            <span className="text-white">LITE</span>
          </h1>
        </Link>
      </div>

      <ul className={`pt-5 ps-2  overflow-hidden text-white`}>
        {menus.map((menu, i) => {
          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex px-3 py-2 items-center transition duration-150 transform   ${
                pathname == menu.href
                  ? 'bg-gray-100  border-l-2 text-black border-y-2 border-lime-400'
                  : 'hover:bg-lime-200 hover:shadow-md hover:text-black'
              }  rounded-s-xl`}
            >
              <li className={`cursor-pointer flex`}>
                {show ? (
                  <Tooltip title={menu.name} placement="right">
                    <img
                      src={menu.src}
                      alt={menu.name}
                      className="h-[30px] w-[30px]"
                      key={menu.name}
                    />
                  </Tooltip>
                ) : (
                  <img
                    src={menu.src}
                    alt={menu.name}
                    className="h-[30px] w-[30px]"
                    key={menu.name}
                  />
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
