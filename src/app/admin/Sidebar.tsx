'use client';
import { Manuale } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarAdmin() {
  const pathname = usePathname();
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
    <nav className="h-screen rounded-r-xl bg-lime-300 w-1/5  sticky top-0 divide-y divide-white ">
      <div className="flex w-full items-center m-5 ">
        <img src="../logo/icon-512x512.png" alt="" className="h-[60px]" />
        <h1 className="text-3xl font-bold ps-5 text-wrap">
          <span className="text-lime-600">m</span>
          <span className="text-white">LITE</span>
        </h1>
      </div>

      <ul className="pt-5 ps-5 ">
        {menus.map((menu, i) => {
          return (
            <Link
              key={i}
              href={menu.href}
              className={`flex px-3 py-2 items-center transition duration-150 transform   ${
                pathname == menu.href ? 'bg-gray-100' : 'hover:bg-lime-200'
              }  rounded-s-xl`}
            >
              <img src={menu.src} alt={menu.name} className="h-[30px] w-[30px]" />
              <li className="cursor-pointer  ps-5">{menu.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
