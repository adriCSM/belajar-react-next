'use client';
import BasicModal from '@/components/Fragments/Modal';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@/components/Fragments/CardPasien';
import Switch from '@mui/material/Switch';
import FormIgd from '@/components/Fragments/FormIgd';
import { FaAddressBook, FaPlus } from 'react-icons/fa';
import CheckBox from '@/components/Elements/CheckBox';
import { TfiReload } from 'react-icons/tfi';
import CardRiwayat from '@/components/Fragments/CardRiwayat';
import Button from '@/components/Elements/Button';

export default function RawatInapPage() {
  const pembiayaan = ['Umum', 'BPJS', 'BPJS Non PBI', 'Karyawan RS'];
  return (
    <div className="px-5 flex h-full">
      <div className="w-3/4 max-h-[113vh] me-5 overflow-auto">
        <div className=" h-1/5  shadow-lg rounded-2xl bg-rawat-inap bg-contain bg-[#00b1d7] bg-no-repeat  mb-5">
          <div className="h-full  w-full flex items-center justify-center ">
            <div className="w-1/4"></div>
            <div className="w-3/4  font-bold text-white text-center  ">
              <p className="text-4xl">Rawat Inap</p>
            </div>
          </div>
        </div>
        <div className=" h-80  shadow-lg rounded-2xl bg-white h-4/5">
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
                  Form={FormIgd}
                  styleButton="bg-transparent text-blue-500  rounded-full p-3 me-3"
                  buttonText="Daftar Reservasi"
                  styleModal="w-5/6 sm:w-2/3 h-auto p-5"
                  Icon={FaAddressBook}
                />
                <BasicModal
                  Form={FormRegistrasi}
                  styleButton="bg-blue-500  text-white hover:bg-blue-600"
                  buttonText="Pasien Baru"
                  styleModal="w-2/3 h-auto p-5"
                  Icon={FaPlus}
                  title="Registrasi Pasien"
                />
              </div>
            </div>
            <div className="border-t-4 border-blue-300 grid grid-cols-2 max-h-[560px] overflow-auto sm:grid-cols-4 gap-4 justify-between rounded-2xl p-5 ring-2 mt-5 mx-2 ring-lime-100">
              {Array.from({ length: 9 }).map((_, index) => {
                return <Card key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-[85vh]  sticky top-0">
        <div className="h-full shadow-lg rounded-xl bg-white p-2">
          <h1>Pembiayaan</h1>
          {pembiayaan.map((item, index) => {
            return <CheckBox name={item} id={item} key={index} styleCheckBox="me-2 text-blue" />;
          })}

          <div className=" max-h-[520px] border-t-4 border-blue-300 overflow-auto  mt-5  px-3">
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
