import { FaBars, FaMoon, FaRegSun, FaRegBell, FaSistrix, FaUserMd } from 'react-icons/fa';
import MenuBar from '@/components/Fragments/MenuBar';
import Link from 'next/link';
import AccountMenu from '@/components/Elements/AccountMenu';
export default function NavbarAdmin(props: any) {
  const { onClick, showSidebar } = props;
  const show = showSidebar;
  return (
    <nav
      className={`w-full flex h-20 bg-white px-5  justify-between rounded-b-xl p-3 z-10 sticky top-0 shadow-md items-center`}
    >
      <div className=" lg:hidden">
        <button>
          <FaBars
            className="text-3xl text-lime-400"
            onClick={() => {
              onClick();
            }}
          />
        </button>
      </div>
      <div className="flex items-center">
        <Link href={'/admin'} className="flex items-center">
          <img src="/logo/icon-512x512.png" alt="" className={`h-8 md:h-10 animate-bounce`} />
          <h1 className={`text-3xl font-bold ps-5 text-wrap animate-pulse`}>
            <span className="text-lime-600">m</span>
            <span className="text-lime-400 text-2xl ">LITE</span>
          </h1>
        </Link>
      </div>
      <div className="hidden lg:block">
        <MenuBar />
      </div>
      <div>
        <ul className="flex items-center text-[1.4rem]">
          <li>
            {/* <FaMoon /> */}
            <FaRegSun className="rounded-full bg-gray-200  h-10 w-10 p-2 me-5 text-lime-500 text-2xl hidden md:block" />
          </li>
          <li>
            <AccountMenu
              className="h-10 w-10 ring-2 ring-lime-500 rounded-full"
              src={'/images/img-person.jpg'}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
