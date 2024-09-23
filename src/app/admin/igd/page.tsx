'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormIgd from '@/components/Fragments/FormIgd';

import FormControlLabel from '@mui/material/FormControlLabel';
import CardPasienIgd from '@/components/Fragments/Card/CardPasienIgd';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Table from '@/components/Fragments/TablePasien';
import Search from '@/components/Elements/Search';
import { useSelector } from 'react-redux';
import { Igd } from '@/model/models';
import { situasi } from '@/utils/pasien';

export default function RawatJalanPage() {
  const data = useSelector((state: any) => state.igd);

  const [viewTable, setViewTable] = useState(false);
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
      setPasiens(data.filter((item: Igd) => item.status == 'aktif'));
    } else {
      setPasiens(data);
    }
  }, [status]);

  // Ketika search Pasien
  const searchEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const filterPasien = pasiens.filter((item: Igd) => {
    const name = item.pasien.nama.toLowerCase().includes(search.toLowerCase());
    const nik = item.pasien.nik.toLowerCase().includes(search.toLowerCase());
    return name || nik;
  });

  const ubahView = (e: any) => {
    if (e.target.value == 'list') {
      setViewTable(true);
    } else {
      setViewTable(false);
    }
    setSearch('');
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
          {situasi.map((item, index) => (
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
            <FormControlLabel control={<Switch onChange={statusEvent} />} label="(Pasien Aktif)" />
          </div>

          <div className="flex flex-col md:flex-row justify-end md:-mt-3 me-2 mt-2">
            <Search search={searchEvent} value={search} />
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

        <div
          className={` border-t-4 border-blue-300 h-[560px] overflow-auto rounded-lg ring-2 mt-5   ring-lime-100 ${
            !viewTable ? 'justify-between py-2 md:p-5 md:mx-2' : 'mx-2'
          } ${filterPasien.length ? '' : 'flex items-center'}`}
        >
          {viewTable ? (
            filterPasien.length ? (
              <Table data={filterPasien} />
            ) : (
              <h1 className="text-center w-full text-xl">Pasien Tidak Ditemukan</h1>
            )
          ) : filterPasien.length ? (
            <div
              className={` grid grid-cols-2 md:grid-cols-3  gap-4 lg:grid-cols-4 xl:grid-cols-5"`}
            >
              {filterPasien.map((pasien: Igd) => {
                return <CardPasienIgd path="/admin/pasien/detail" data={pasien} key={pasien.id} />;
              })}
            </div>
          ) : (
            <h1 className="text-center w-full text-xl">Pasien Tidak Ditemukan</h1>
          )}
        </div>
      </div>
    </div>
  );
}
