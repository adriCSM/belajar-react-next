'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardPasien from '@/components/Fragments/CardPasien';
import { FaPlus } from 'react-icons/fa';
import Table from '@/components/Fragments/TablePasien';
import { useEffect, useState } from 'react';

import Search from '@/components/Elements/Search';
import { situasi } from '@/utils/pasien';
import { useSelector } from 'react-redux';
import { Pasien } from '@/model/models';

export default function PasienPage() {
  const [viewGrid, setViewGrid] = useState(true);
  const [viewTable, setViewTable] = useState(false);

  const data = useSelector((state: any) => state.pasien);

  const [status, setStatus] = useState(false);
  const [pasiens, setPasiens] = useState([]);

  const [search, setSearch] = useState('');

  // Ketika Filter Status Pasien
  const statusEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  useEffect(() => {
    if (status) {
      setPasiens(data.filter((item: Pasien) => item.status == 'aktif'));
    } else {
      setPasiens(data);
    }
  }, [status]);

  // Ketika search Pasien
  const searchEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const filterPasien = pasiens.filter((item: Pasien) =>
    item.pasien.nama.toLowerCase().includes(search.toLowerCase()),
  );

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
    <div className="p-5 w-auto ">
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
          {situasi.map((item, index) => (
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
          Pasien <span className="font-normal text-sm md:text-md">({pasiens.length} total)</span>
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
            <FormControlLabel control={<Switch onChange={statusEvent} />} label="(Pasien Aktif)" />
          </div>

          <div className="flex flex-col md:flex-row justify-end md:-mt-3 me-2 mt-2">
            <Search search={searchEvent} />
            <BasicModal
              Form={FormRegistrasi}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 "
              buttonText="Pasien Baru"
              styleModal="w-5/6 md:w-4/5 sm:w-2/3  h-5/6 p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pasien Baru"
            />
          </div>
        </div>
        <div className="transition-width duration-300">
          <div
            className={` border-t-4 border-blue-300 h-[560px] overflow-auto rounded-lg ring-2 mt-5   ring-lime-100 ${
              !viewTable ? 'justify-between py-2 md:p-5 md:mx-2' : 'mx-2'
            } ${filterPasien.length ? '' : 'flex items-center'}`}
          >
            {viewTable ? (
              filterPasien.length ? (
                <Table data={filterPasien} />
              ) : (
                <h1 className="text-center w-full text-5xl">Pasien Tidak Ditemukan</h1>
              )
            ) : // <div
            //   className={` border-t-4 border-blue-300  h-[560px]  overflow-auto   rounded-lg  ring-2 mt-5  ring-lime-100 transition-width duration-300"`}
            // >
            filterPasien.length ? (
              <div
                className={` grid grid-cols-2 md:grid-cols-3  gap-4 lg:grid-cols-4 xl:grid-cols-5"`}
              >
                {filterPasien.map((pasien: Pasien) => {
                  return <CardPasien path="/admin/pasien/detail" data={pasien} key={pasien.id} />;
                })}
              </div>
            ) : (
              <h1 className="text-center w-full">Pasien Tidak Ada</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
