'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardPasien from '@/components/Fragments/CardPasien';
import { FaPlus, FaList } from 'react-icons/fa';
import Table from '@/components/Fragments/Table';
import { useEffect, useState } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import Search from '@/components/Elements/Search';
export default function PasienPage() {
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
    <div className="p-5 w-auto container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 border-2 border-cyan-500  bg-register bg-contain bg-no-repeat bg-[#66cdcc]  h-80  shadow-md rounded-xl me-5  ">
          <div className="h-full  w-full flex lg:items-center items-end  lg:justify-center ">
            <div className="w-1/2 hidden lg:block"></div>
            <div className="w-full lg:w-1/2 ps-5 lg:ps-12 font-bold text-start  lg:text-center text-white md:text-gray-500 lg:text-white">
              <p className="text-3xl lg:text-5xl">Registrasi</p>
              <p className="text-2xl">Pasien</p>
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
                index == 2 && 'ring-red-500 bg-red-400'
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

      <div className="w-full h-auto bg-white mt-5 rounded-xl shadow-md p-5">
        <h1 className="text-md md:text-xl font-bold ">
          Pasien <span className="font-normal text-sm md:text-md">(546 total)</span>
        </h1>
        <div>
          <div>
            <select
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
              Form={FormRegistrasi}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 "
              buttonText="Pasien Baru"
              styleModal="w-5/6 md:w-4/5 sm:w-2/3 h-auto p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pasien Baru"
            />
          </div>
        </div>
        <div className="transition-width duration-300">
          {viewTable && (
            <div
              className={` border-t-4 border-blue-300 max-h-[560px]   overflow-auto rounded-lg ring-2 mt-5 mx-2 ring-lime-100`}
            >
              <Table headers={headers} values={values} />
            </div>
          )}

          {viewGrid && (
            <div
              className={` border-t-4 border-blue-300 grid grid-cols-2 max-h-[560px]  overflow-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between rounded-lg py-2 md:p-5 ring-2 mt-5 md:mx-2 ring-lime-100 transition-width duration-300"`}
            >
              {Array.from({ length: 9 }).map((_, index) => {
                return <CardPasien key={index} path="/admin/pasien/detail" />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
