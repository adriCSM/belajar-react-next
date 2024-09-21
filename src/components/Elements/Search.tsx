import { FaSistrix } from 'react-icons/fa6';

export default function Search({ ...props }) {
  return (
    <div className={`${props.className}  order-last md:order-first md:me-5 mt-5 md:mt-0`}>
      <form className="group relative  ">
        <FaSistrix className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
        <input
          className={`rounded-full  focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 py-1 pl-10 ring-1 ring-slate-200 shadow-sm`}
          type="text"
          aria-label="Filter projects"
          placeholder="Search..."
          value={props.value}
          onChange={props.search}
        />
      </form>
    </div>
  );
}
