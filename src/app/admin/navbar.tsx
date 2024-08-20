import { FaBars, FaMoon, FaRegSun, FaRegBell, FaSistrix, FaUserMd } from 'react-icons/fa';
export default function NavbarAdmin() {
  return (
    <nav className="flex w-full h-20 bg-white mb-5 justify-between rounded-b-xl p-3 sticky top-0 z-10 shadow-md items-center">
      <div className="flex items-center">
        <button className="ms-2 text-lime-500">
          <FaBars />
        </button>
        <form className="group relative ms-5 ">
          <FaSistrix className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
          <input
            className="rounded-3xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form>
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
