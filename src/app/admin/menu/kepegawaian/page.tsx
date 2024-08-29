'use client';
import Search from '@/components/Elements/Search';
import FormPegawai from '@/components/Fragments/FormPegawai';
import BasicModal from '@/components/Fragments/Modal';
import { FaPlus } from 'react-icons/fa6';
import CardPegawai from '@/components/Fragments/CardPegawai';
import Select from '@/components/Elements/Select';
import { useState } from 'react';
import TablePegawai from '@/components/Fragments/TablePegawai';
import CheckBox from '@/components/Elements/CheckBox';
export default function LayoutKepegawaian() {
  const headers = [
    'Kode Pegawai',
    'Nama Pegawai',
    'Tempat Lahir',
    'Tanggal Lahir',
    'Departemen',
    'Bidang',
    'Status',
    'Aksi',
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
  ];
  const list = ['Semua', 'A to Z', 'Z to A', 'Latest', 'Oldest'];
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
  const listPegawai = ['Dokter', 'Perawat', 'Staf', 'Satpam'];
  return (
    <div className="h-auto px-5 container mx-auto  mt-6 flex flex-col md:flex-row  ">
      <div className="w-full md:w-4/5  bg-white rounded-xl shadow-lg h-[85vh] overflow-auto mb-5 ">
        <div className="border-b-4 px-5  border-blue-300 sticky top-0 flex  justify-between items-center mb-2 py-5 bg-white z-10  bg-white">
          <div className="flex  ">
            <select
              id="view"
              className="rounded-full me-3 border-2 bg-transparent   p-1 pr-7  focus:outline-blue-600  text-xs md:text-sm"
              onChange={ubahView}
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
          <div className="flex items-center">
            <BasicModal
              Form={FormPegawai}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 ms-5 "
              buttonText="Add Pegawai"
              styleModal="w-5/6 md:w-4/5 sm:w-2/3 h-auto p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pegawai"
            />
          </div>
        </div>
        {viewGrid && (
          <div
            className={` grid grid-cols-2 mx-5  md:grid-cols-3 lg:grid-cols-4  gap-4 justify-between rounded-lg py-2 md:p-5 ring-2  md:mx-2 ring-lime-100 transition-width duration-300"`}
          >
            {Array.from({ length: 9 }).map((_, index) => {
              return <CardPegawai key={index} path="/admin/menu/kepegawaian/detail" />;
            })}
          </div>
        )}
        {viewTable && (
          <div className={`px-5   overflow-auto rounded-lg ring-2 mx-2 ring-lime-100`}>
            <TablePegawai headers={headers} values={values} />
          </div>
        )}
      </div>
      <div className="w-full order-first md:order-last md:w-1/5 md:h-[85vh] bg-white md:ms-5 mb-5 md:mb-0 rounded-xl shadow-md p-5 md:sticky top-[105px]">
        <Search className="pb-5" />
        <ul>
          {listPegawai.map((item, index) => {
            return (
              <li key={index}>
                <CheckBox id={item} name={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
