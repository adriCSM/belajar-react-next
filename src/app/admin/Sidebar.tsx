'use client';
import { Manuale } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaXmark } from 'react-icons/fa6';

export default function SidebarAdmin({ ...props }) {
  const show = props.showSidebar;
  const pathname = usePathname();
  const handleShow = props.handleShow;
  const menus = [
    {
      name: 'Menu',
      href: '/admin/menu',
      src: '../icons/icon-home.png',
    },
    {
      name: 'Pasien',
      href: '/admin/pasien',
      src: '../icons/icon-pasien.png',
    },
    {
      name: 'IGD',
      href: '/admin/igd',
      src: '../icons/icon-igd.png',
    },
    {
      name: 'Rawat Jalan',
      href: '/admin/rawat_jalan',
      src: '../icons/icon-ralan.png',
    },
    {
      name: 'Rawat Inap',
      href: '/admin/rawat_inap',
      src: '../icons/icon-ranap.png',
    },
    {
      name: 'Anjungan',
      href: '/admin/anjungan',
      src: '../icons/icon-informasi.png',
    },
  ];
  return (
    <nav
      className={`lg:hidden w-screen md:w-1/2 fixed transition transform duration-300  sm:inline h-full rounded-r-xl bg-gradient-to-tr from-lime-400 to-lime-300  ${
        show ? '' : ' -translate-x-full'
      }   divide-y divide-white z-20`}
    >
      <div className={`  w-full  items-center mx-2 my-5 p-5`}>
        <Link href={'/admin'} className="flex items-center " onClick={() => handleShow()}>
          <img src="../logo/icon-512x512.png" alt="" className={`h-[60px]`} />
          <h1 className={`text-3xl font-bold ps-5 text-wrap`}>
            <span className="text-lime-600">m</span>
            <span className="text-white">LITE</span>
          </h1>
        </Link>
        <FaXmark
          className="absolute right-2 top-2 cursor-pointer rounded-full bg-gray-200  h-8 w-8 p-2  text-lime-500 text-2xl"
          onClick={() => handleShow()}
        />
      </div>

      <ul className={`pt-5 `}>
        {menus.map((menu, i) => {
          return (
            <Link
              onClick={() => handleShow()}
              key={i}
              href={menu.href}
              className={`flex px-3 py-2 items-center transition duration-150 transform   ${
                pathname == menu.href
                  ? 'bg-gray-100 shadow-lg border-l-2 border-y-2 border-lime-400'
                  : 'hover:bg-lime-200 hover:shadow-md'
              }  rounded-s-xl`}
            >
              <img src={menu.src} alt={menu.name} className="h-[30px] w-[30px]" />
              <li className={`cursor-pointer  ps-5 `}>{menu.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
