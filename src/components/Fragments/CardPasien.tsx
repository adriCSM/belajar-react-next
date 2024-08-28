import Image from 'next/image';
import { FaCheck, FaEllipsisV, FaMars, FaVenus } from 'react-icons/fa';
import AccountMenu from '../Elements/AccountMenu';
import DetailMenu from '../Elements/DetailsMenu';

export default function Card({ ...props }) {
  return (
    <div
      className="h-auto w-auto text-xs rounded-xl text-xs  lg:text-sm ring-1 ring-lime-300"
      key={props.key}
    >
      <div className="w-full bg-lime-200 rounded-t-xl p-2 flex items-center justify-between">
        <div className="text-gray-800  ">
          <h1>Poliklinik Jantung</h1>
          <p>Jum, 2 feb 24 18:00</p>
        </div>
        <FaCheck className="text-lime-500 rounded-full bg-white p-2 m-1  h-6 w-6" />
      </div>
      <div>
        <div className=" flex  items-center justify-between p-2">
          <div className="px-2 py-1 text-white bg-blue-500 rounded-lg ">
            <p>BPJS</p>
          </div>
          <div>
            <DetailMenu icon={FaEllipsisV} path={props.path} />
          </div>
        </div>
        <div className=" flex  justify-center">
          <div className="relative ">
            <Image src="/images/img-person.jpg" alt="" className={`rounded-full w-28 h-28 `} />
            <FaMars className="text-blue-400 font-bold absolute bottom-4 right-4 bg-white rounded-full " />
          </div>
        </div>
        <div className="text-center  py-3 text-wrap ">
          <h1 className="font-bold p-2 h-auto">Adri candra saputra mangidi</h1>
          <p>No.REG:1234567</p>
          <p>No.RM:B68099</p>
          <p>No.BPJS:1234567</p>
          <p>NIK:7402192912010001</p>
        </div>
      </div>
    </div>
  );
}
