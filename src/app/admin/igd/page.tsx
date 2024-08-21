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
import { useState } from 'react';
import Table from '@/components/Fragments/Table';
export default function RawatJalanPage() {
  const headers = [
    'No. RM',
    'Nama Pasien',
    'Nomor Rawat',
    'Bangsal/Kamar',
    'Dokter',
    'Penjamin',
    'Nomor Asuransi',
    'Tanggal Masuk',
    'Tanggal Keluar',
    'Status Bayar',
    'Status',
  ];
  const values = [
    '023293223',
    'Adri Candra',
    '2024/02/22/000001',
    'Anggrek - ANG01',
    'dr. FAUZAN AZHARI MARZUKI, Sp. KK - D002',
    'BPJS',
    '-',
    '2024-06-03 07:20:30',
    '0000-00-00 00:00:00',
    'Belum Bayar',
    '-',
    '-',
    '-',
    '-',
    '-',
  ];

  const [viewGrid, setViewGrid] = useState(true);
  const [viewTable, setViewTable] = useState(false);

  const ubahView = (e: any) => {
    if (e.target.value == 'list') {
      setViewGrid(false);
      setViewTable(true);
    } else {
      setViewGrid(true);
      setViewTable(false);
    }
  };
  return (
    <div className="p-5 ">
      <div className="flex flex-col md:flex-row ">
        <div className=" md:w-2/3 border-2 border-blue-300 md:me-5 bg-igd h-80 bg-contain bg-no-repeat bg-left bg-[#bee8f6] bg-center shadow-md rounded-xl  ">
          <div className="h-full  w-full flex items-end md:items-center justify-center ">
            <div className="w-1/2 hidden md:block"></div>
            <div className="w-full md:w-1/2 md:ps-5 font-bold text-center flex justify-center md:block ">
              <p className="md:text-5xl text-2xl">IGD</p>
              <p className="md:text-2xl text-xl">( Instalasi Gawat Darurat )</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-5 md:mt-0 md:w-1/3">
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
      <div className="flex w-full h-auto flex-col  bg-white mt-5 rounded-xl shadow-md p-5">
        <h1 className="text-md md:text-xl font-bold ">
          Pasien <span className="font-normal text-sm md:text-md">(546 total)</span>
        </h1>
        <div>
          <div>
            <select
              id="view"
              className=" rounded-full me-3 border-2 bg-transparent p-1 pr-7 focus:ring-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs md:text-sm"
              onChange={ubahView}
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
            <FormControlLabel control={<Switch defaultChecked />} label="(Pasien Aktif)" />
          </div>

          <div className="flex justify-end md:-mt-3 me-2 ">
            <BasicModal
              Form={FormIgd}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 text-sm md:text-base"
              buttonText="Pasien Baru"
              styleModal="w-2/3 h-auto p-5"
              Icon={FaPlus}
              title="Registrasi Pasien"
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col md:flex-row">
          {viewTable && (
            <div
              className={` border-t-4 border-blue-300 w-full max-h-[560px]  overflow-auto rounded-lg ring-2 mt-5 mx-2 ring-lime-100`}
            >
              <Table headers={headers} values={values} />
            </div>
          )}

          {viewGrid && (
            <div
              className={` border-t-4 border-blue-300 grid grid-cols-2 max-h-[560px]  overflow-auto sm:grid-cols-4 gap-4 justify-between rounded-lg md:p-5 ring-2 mt-5 md:mx-2 ring-lime-100`}
            >
              {Array.from({ length: 9 }).map((_, index) => {
                return <CardPasien key={index} />;
              })}
            </div>
          )}
          <div className="md:w-1/4 max-h-[560px] border-2 overflow-auto  mt-5 rounded-lg px-3">
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
