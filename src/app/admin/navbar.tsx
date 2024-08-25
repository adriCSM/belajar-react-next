import { FaBars, FaMoon, FaRegSun, FaRegBell, FaSistrix, FaUserMd } from 'react-icons/fa';
import MenuBar from '@/components/Fragments/MenuBar';
import Link from 'next/link';
import AccountMenu from '@/components/Elements/AccountMenu';
export default function NavbarAdmin(props: any) {
  const { onClick, showSidebar } = props;
  const show = showSidebar;
  return (
    <nav
      className={`w-full flex h-20 bg-white px-5  justify-between rounded-br-xl p-3 z-10 sticky top-0 shadow-md items-center`}
    >
      <div className="">
        <button>
          <FaBars
            className="text-3xl text-lime-400"
            onClick={() => {
              onClick();
            }}
          />
        </button>
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
