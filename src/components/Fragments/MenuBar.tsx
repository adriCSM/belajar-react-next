import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuBar() {
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
  const pathname = usePathname();
  return (
    <ul className={` flex items-center`}>
      {menus.map((menu, i) => {
        return (
          <Link
            key={i}
            href={menu.href}
            className={`flex px-3 py-2 items-center transition duration-150 transform   ${
              pathname == menu.href
                ? 'bg-gray-100  border-2  border-lime-400'
                : 'hover:text-lime-300 '
            }  rounded-xl`}
          >
            <Image src={menu.src} alt={menu.name} width={20} height={20} />
            <li className={`cursor-pointer ps-1 `}>{menu.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
