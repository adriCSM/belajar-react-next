'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormReservasi from '@/components/Fragments/FormReservasi';
import Card from '@/components/Fragments/CardPasien';
import { FaPlus } from 'react-icons/fa';

export default function PasienPage() {
  return (
    <div className="p-5 text-gray-500">
      <div className="flex">
        <div className="w-2/3 bg-register bg-contain bg-no-repeat bg-[#66cdcc]  h-80  shadow-lg rounded-2xl me-5  ">
          <div className="h-full  w-full flex items-center justify-center ">
            <div className="w-1/2"></div>
            <div className="w-1/2 ps-12 font-bold text-center text-white ">
              <p className="text-5xl">Registrasi</p>
              <p className="text-2xl">Pasien</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-1/3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className={`ring-2  text-center rounded-lg p-2 flex flex-col  text-white  w-full justify-center ${
                index == 0 && 'ring-cyan-300 bg-cyan-400'
              } ${index == 1 && 'ring-blue-300 bg-blue-400'} ${
                index == 2 && 'ring-red-300 bg-red-400'
              } ${index == 3 && 'ring-purple-300 bg-purple-400'} `}
            >
              <img
                src="../images/img-person.jpg"
                alt=""
                className="w-12 h-12 rounded-full self-center mb-2"
              />

              <div className="flex flex-col justify-start ps-2">
                <h1>569</h1>
                <p>Antrian Pasien</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto bg-white mt-5 rounded-2xl shadow-lg p-5">
        <h1 className="text-xl font-bold ">
          Pasien <span className="font-normal text-[16px]">(546 total)</span>
        </h1>
        <div>
          <div>
            <select
              id="view"
              className=" rounded-md me-3 border-0 bg-transparent p-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Grid View</option>
              <option>List View</option>
            </select>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="(Pasien Aktif)"
              className="text-gray-500"
            />
          </div>

          <div className="flex justify-end -mt-3 me-2">
            <BasicModal
              Form={FormRegistrasi}
              styleButton="bg-blue-500  text-white hover:bg-blue-600"
              buttonText="Pasien Baru"
              styleModal="w-4/5 sm:w-2/3 h-auto p-5"
              Icon={FaPlus}
              title="Registrasi Pasien Baru"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 max-h-[560px] overflow-auto sm:grid-cols-4 gap-4 justify-between rounded-2xl p-5 ring-2 mt-5 mx-2 ring-lime-100">
          {Array.from({ length: 9 }).map((_, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
