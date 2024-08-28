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
import Table from '@/components/Fragments/TablePasien';
import { FaUserGroup } from 'react-icons/fa6';
import Search from '@/components/Elements/Search';
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
  const kondisi = [
    {
      name: 'Total Pasien',
      jumlah: '350',
      icon: FaUserGroup,
    },
    {
      name: 'Menunggu dipanggil',
      jumlah: '150',
      icon: FaUserGroup,
    },
    {
      name: 'Dalam Pelayanan',
      jumlah: '100',
      icon: FaUserGroup,
    },
    {
      name: 'Selesai',
      jumlah: '100',
      icon: FaUserGroup,
    },
  ];
  const search = () => {
    console.log('adri');
  };
  return (
    <div className="p-5  container mx-auto">
      <div className="flex flex-col md:flex-row ">
        <div className=" md:w-2/3 border-2 border-blue-300 md:me-5 bg-igd h-80 bg-contain bg-no-repeat bg-left bg-[#bee8f6] bg-center shadow-md rounded-xl  ">
          <div className="h-full  w-full flex items-end md:items-center justify-center ">
            <div className="w-1/2 hidden md:block"></div>
            <div className="w-full md:w-1/2 md:ps-5 font-bold text-center md:hidden lg:block  flex justify-center md:block ">
              <p className="md:text-5xl text-2xl">IGD</p>
              <p className="md:text-2xl text-xl">( Instalasi Gawat Darurat )</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 md:mt-0 md:w-1/3 ">
          {kondisi.map((item, index) => (
            <div
              key={index}
              className={`ring-2  text-center rounded-lg p-2 flex flex-col   text-white  w-full justify-center ${
                index == 0 && 'ring-cyan-500 bg-cyan-400'
              } ${index == 1 && 'ring-blue-500 bg-blue-400'} ${
                index == 2 && 'ring-red-500 bg-red-400 '
              } ${index == 3 && 'ring-purple-500 bg-purple-400'} `}
            >
              <item.icon className="w-16 h-16 rounded-full self-center mb-2" />

              <div className="flex flex-col justify-start ps-2">
                <h1 className="text-xl font-bold">{item.jumlah}</h1>
                <p className="text-sm">{item.name}</p>
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

          <div className="flex flex-col md:flex-row justify-end md:-mt-3 me-2 mt-2">
            <Search search={search} />
            <BasicModal
              Form={FormIgd}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 text-sm md:text-base"
              buttonText="Pasien Baru"
              styleModal="w-5/6 md:w-2/3 h-auto p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pasien IGD"
            />
          </div>
        </div>

        <div className="w-full h-full md:flex ">
          {viewTable && (
            <div
              className={` border-t-4 border-blue-300 md:w-3/4 max-h-[560px]  overflow-auto rounded-lg ring-2 mt-5 mx-2 ring-lime-100`}
            >
              <Table headers={headers} values={values} />
            </div>
          )}

          {viewGrid && (
            <div
              className={` border-t-4 border-blue-300 grid md:w-3/4 grid-cols-2 max-h-[560px]  overflow-auto md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between rounded-lg md:p-5 ring-2 mt-5 md:mx-2 ring-lime-100`}
            >
              {Array.from({ length: 9 }).map((_, index) => {
                return <CardPasien key={index} path="/admin/pasien/igd" />;
              })}
            </div>
          )}
          <div className="md:w-1/4 max-h-[560px] border-2 overflow-auto  mt-5 rounded-lg md:px-1 lg:px-3">
            <div className="sticky top-0 bg-white py-3 border-b-4 text-sm lg-text-md border-red-300">
              <div className="pb-2 flex justify-between   items-center">
                <h1>Riwayat Registrasi</h1>
                <div className="bg-gray-100 hover:bg-gray-200 text-blue-500 cursor-pointer h-9 w-9 p-2 rounded-full flex">
                  <TfiReload className="animate-spin m-auto" />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-center mb-3">Instalasi Rawat Jalan</h1>
              </div>
            </div>
            <div className="  p-2 rounded-lg   overflow-auto ">
              {Array.from({ length: 15 }).map((_, index) => {
                return <CardRiwayat key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
