'use client';
import Search from '@/components/Elements/Search';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import BasicModal from '@/components/Fragments/Modal';
import { FaPlus } from 'react-icons/fa6';
import CardPasien from '@/components/Fragments/CardPasien';
import CheckBox from '@/components/Elements/CheckBox';
import Select from '@/components/Elements/Select';
export default function LayoutKepegawaian() {
  const list = ['Semua', 'A to Z', 'Z to A', 'Latest', 'Oldest'];
  return (
    <div className="h-auto  container mx-auto bg-white mt-6 flex rounded-xl shadow-lg ">
      <div className="w-full p-5">
        <div className="flex justify-between items-center mb-2  sticky top-0 bg-white">
          <Search />
          <div className="flex items-center">
            <Select list={list} styleParent="w-40 " placeholder="Sort By" />
            <BasicModal
              Form={FormRegistrasi}
              styleButton="bg-blue-500  text-white hover:bg-blue-600 ms-5 "
              buttonText="Add Pegawai"
              styleModal="w-5/6 md:w-4/5 sm:w-2/3 h-auto p-3 md:p-5"
              Icon={FaPlus}
              title="Registrasi Pasien Baru"
            />
          </div>
        </div>
        <div
          className={` border-t-4 border-blue-300 grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between rounded-lg py-2 md:p-5 ring-2 mt-5 md:mx-2 ring-lime-100 transition-width duration-300"`}
        >
          {Array.from({ length: 9 }).map((_, index) => {
            return <CardPasien key={index} path="/admin/pasien/detail" />;
          })}
        </div>
      </div>
    </div>
  );
}
