import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AccountMenu from '@/components/Elements/AccountMenu';
export default function NavbarAdmin(props: any) {
  const { onClick, showSidebar } = props;
  const show = showSidebar;
  return (
    <nav
      className={`w-full flex h-20 bg-white px-5  justify-between rounded-br-xl p-3 z-10 sticky top-0 border-b-2 border-gray-100 items-center`}
    >
      <div className=" transition">
        <button>
          {show ? (
            <FaChevronRight
              className="text-2xl text-lime-400"
              onClick={() => {
                onClick();
              }}
            />
          ) : (
            <FaChevronLeft
              className="text-2xl text-lime-400"
              onClick={() => {
                onClick();
              }}
            />
          )}
        </button>
      </div>
      <div>
        <ul className="flex items-center text-[1.4rem]">
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
