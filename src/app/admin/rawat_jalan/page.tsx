'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormRawatJalan from '@/components/Fragments/FormRawatJalan';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardPasien from '@/components/Fragments/CardPasien';
import { FaPlus } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import Button from '@/components/Elements/Button';
import CardRiwayat from '@/components/Fragments/CardRiwayat';
import Table from '@/components/Fragments/TablePasien';
import { useState } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import Search from '@/components/Elements/Search';
import { pasien, situasi } from '@/utils/pasien';
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
  const [p, setP] = useState(pasien);
  const [search, setSearch] = useState('');
  const [newPasien, setNewPasien] = useState(p);
  const [status, setStatus] = useState('aktif');

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
    <div className="p-5  container mx-auto">
      <div className="md:flex ">
        <div className="md:w-2/3 border-2 border-gray-300 md:me-5 bg-rawat-jalan h-80 bg-contain bg-no-repeat bg-left bg-[#fcf8ec] bg-center shadow-md rounded-xl  ">
          <div className="h-full  w-full flex items-end md:items-center justify-center ">
            <div className="w-1/2 hidden md:block"></div>
            <div className="md:w-1/2 ps-5 font-bold text-center  ">
              <p className="md:text-5xl text-3xl">Rawat Jalan</p>
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
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="(Pasien Aktif)"
              className="text-gray-500"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-end md:-mt-3 me-2 mt-2">
            <Search search={search} />
            <BasicModal
              Form={FormRawatJalan}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 text-sm md:text-base"
              buttonText="Pasien Baru"
              styleModal="w-5/6 md:w-2/3 h-auto p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pasien Rawat Jalan"
            />
          </div>
        </div>

        <div className="w-full h-full md:flex ">
          {viewTable && (
            <div
              className={` border-t-4 border-blue-300 w-full max-h-[560px]  overflow-auto rounded-lg ring-2 mt-5 mx-2 ring-lime-100`}
            >
              <Table headers={headers} values={values} />
            </div>
          )}

          {viewGrid && (
            <div
              className={` border-t-4 border-blue-300  w-full max-h-[560px]  overflow-auto  justify-between rounded-lg py-2 md:p-5 ring-2 mt-5 md:mx-2 ring-lime-100 transition-width duration-300"`}
            >
              {newPasien.length ? (
                <div
                  className={` grid grid-cols-2 md:grid-cols-3  gap-4 lg:grid-cols-4 xl:grid-cols-5"`}
                >
                  {newPasien.map((pasien) => {
                    return <CardPasien path="/admin/pasien/detail" data={pasien} key={pasien.id} />;
                  })}
                </div>
              ) : (
                <h1 className="text-center w-full">Pasien Tidak Ada</h1>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
