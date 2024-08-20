import { FaCheck, FaEllipsisV, FaMars, FaVenus } from 'react-icons/fa';

export default function Card({ ...props }) {
  return (
    <div className="card h-auto w-auto rounded-xl text-sm ring-1 ring-lime-300">
      <div className="h-1/4 w-full bg-lime-200 rounded-t-xl p-2 flex items-center justify-between">
        <div className="text-gray-800">
          <h1>Poliklinik Jantung</h1>
          <p>Jum, 2 feb 24 18:00</p>
        </div>
        <FaCheck className="text-lime-500 rounded-full bg-white p-2 m-1  h-6 w-6" />
      </div>
      <div>
        <div className=" flex  items-center justify-between p-2">
          <div className="px-2 py-1 text-white bg-blue-500 rounded-lg ">
            <p className=" text-xs">BPJS</p>
          </div>
          <div>
            <FaEllipsisV {...props} />
          </div>
        </div>
        <div className="flex  justify-center">
          <img src="../images/img-person.jpg" alt="" className={`rounded-full w-28 h-28 `} />
          <FaMars className="text-blue-400 font-bold " />
        </div>
        <h1 className="text-center font-bold p-2">Adri Csm</h1>
      </div>
    </div>
  );
}
