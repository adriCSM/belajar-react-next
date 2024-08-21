import { FaBars, FaMoon, FaRegSun, FaRegBell, FaSistrix, FaUserMd } from 'react-icons/fa';
import MenuBar from '@/components/Fragments/MenuBar';
export default function NavbarAdmin(props: any) {
  const { onClick, showSidebar } = props;
  const show = showSidebar;
  return (
    <nav
      className={`w-full flex h-20 bg-white  justify-between rounded-b-xl p-3 sticky top-0 shadow-md items-center`}
    >
      <div className="flex items-center">
        <div className={` flex w-full items-center `}>
          <img src="../logo/icon-512x512.png" alt="" className={`h-[40px] animate-bounce`} />
          <h1 className={`text-3xl font-bold ps-5 text-wrap animate-pulse`}>
            <span className="text-lime-600">m</span>
            <span className="text-lime-400 text-2xl ">LITE</span>
          </h1>
        </div>
        {/* <button className="ms-2 text-lime-500" onClick={onClick}>
          <FaBars />
        </button> */}
        {/* <form className="group relative ms-5 ">
          <FaSistrix className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
          <input
            className="rounded-3xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form> */}
      </div>
      <div>
        <MenuBar />
      </div>
      <div>
        <ul className="flex items-center text-[1.4rem]">
          <li className="rounded-full bg-gray-200  p-3 me-3 text-lime-500 text-2xl">
            {/* <FaMoon /> */}
            <FaRegSun />
          </li>
          <li className="me-3 text-lime-500">
            <FaRegBell />
          </li>
          <li>
            <img
              src="../images/img-person.jpg"
              alt=""
              className="h-12 w-12 ring-2 ring-lime-500 rounded-full"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
