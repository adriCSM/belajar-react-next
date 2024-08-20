'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormIgd from '@/components/Fragments/FormIgd';

import FormControlLabel from '@mui/material/FormControlLabel';
import CardPasien from '@/components/Fragments/CardPasien';
import { FaAddressBook, FaPlus } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import Button from '@/components/Elements/Button';
import CardRiwayat from '@/components/Fragments/CardRiwayat';
export default function RawatJalanPage() {
  return (
    <div className="p-5 ">
      <div className="flex">
        <div className="w-2/3 border-4 border-blue-300 me-5 bg-igd h-80 bg-contain bg-no-repeat bg-left bg-[#bee8f6] bg-center shadow-lg rounded-2xl  ">
          <div className="h-full  w-full flex items-center justify-center ">
            <div className="w-1/2"></div>
            <div className="w-1/2 ps-5 font-bold text-center  ">
              <p className="text-5xl">IGD</p>
              <p className="text-2xl">( Instalasi Gawat Darurat )</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-1/3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className={`ring-2  text-center rounded-lg p-2 flex flex-col  text-white  w-full justify-center ${
                index == 0 && 'ring-cyan-500 bg-cyan-400'
              } ${index == 1 && 'ring-blue-500 bg-blue-400'} ${
                index == 2 && 'ring-red-500 bg-red-400'
              } ${index == 3 && 'ring-purple-500 bg-purple-400'} `}
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
      <div className="flex w-full h-auto flex-col  bg-white mt-5 rounded-2xl shadow-lg p-5">
        <h1 className="text-xl font-bold ">
          Pasien <span className="font-normal text-[16px]">(546 total)</span>
        </h1>
        <div>
          <div>
            <select
              id="view"
              className=" rounded-md me-3 border-0 bg-transparent p-2 pr-7  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Grid View</option>
              <option>List View</option>
            </select>
            <FormControlLabel control={<Switch defaultChecked />} label="(Pasien Aktif)" />
          </div>

          <div className="flex justify-end -mt-3 me-2 ">
            <BasicModal
              Form={FormIgd}
              styleButton="bg-blue-500  text-white hover:bg-blue-600"
              buttonText="Pasien Baru"
              styleModal="w-2/3 h-auto p-5"
              Icon={FaPlus}
              title="Registrasi Pasien"
            />
          </div>
        </div>

        <div className="w-full h-full flex ">
          <div className=" border-t-4 border-blue-300 overflow-auto max-h-[560px] grid grid-cols-2 sm:grid-cols-4 gap-4 justify-between rounded-2xl p-5 ring-2 mt-5 mx-2 ring-lime-100">
            {Array.from({ length: 19 }).map((_, index) => {
              return <CardPasien key={index} />;
            })}
          </div>
          <div className="w-1/4 max-h-[560px] border-2 overflow-auto  mt-5 rounded-2xl px-3">
            <div className="sticky top-0 bg-white py-3 border-b-4 border-red-300">
              <div className="pb-2 flex justify-between  items-center">
                <h1>Riwayat Registrasi</h1>
                <Button
                  Icon={TfiReload}
                  styleButton="rounded-full h-8 w-6 pe-1 ring-gray-500 text-xs"
                />
              </div>
              <div>
                <h1 className="font-bold text-center mb-3">Instalasi Rawat Jalan</h1>
              </div>
            </div>
            <div className="  p-2 rounded-lg   overflow-auto ">
              {Array.from({ length: 15 }).map((_, index) => {
                return <CardRiwayat />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
