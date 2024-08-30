import CardRiwayat from '@/components/Fragments/CardRiwayat';
import { TfiReload } from 'react-icons/tfi';
import TabPasien from '@/components/Fragments/TabPasien/MainTab';
import Image from 'next/image';
import { FaMars } from 'react-icons/fa6';
import { FaRegFileAlt } from 'react-icons/fa';

type id = { params: { id: string } };
export default function DetailPasien(props: id) {
  const { id } = props.params;

  return (
    <div className="h-auto  container mx-auto p-5">
      <div>
        <div className="h-60 flex flex-col md:flex-row  gap-5 ">
          <div className="bg-white h-full rounded-xl bg-white shadow-lg md:w-1/4 p-5 flex flex-col justify-between">
            <div className="flex gap-2 h-full  items-center">
              <div className="w-1/3">
                <div className="relative ">
                  <Image
                    src="/images/img-person.jpg"
                    alt=""
                    className={`rounded-full ring-2 ring-offset-4 ring-amber-500`}
                    height={80}
                    width={80}
                  />
                  <FaMars className="text-blue-400 text-2xl p-1 font-bold absolute bottom-2 right-2 bg-white rounded-full " />
                </div>
                <h1 className="text-center mt-2">Usia</h1>
              </div>
              <div className="w-2/3  overflow-hidden text-nowrap text-xs">
                <h1 className="truncate text-xl font-bold">Adri Candra Saputra Mangidi</h1>
                <p>740123456789</p>
                <p>740123456789</p>
                <p>Cirebon, 29 desember 2029</p>
                <p>08123456</p>
              </div>
            </div>
            <div className="bg-lime-100 h-1/3 rounded-xl p-5 ring-2 ring-amber-500 flex items-center gap-2 justify-center">
              <FaRegFileAlt />
              <h1 className="text-center">Belum ada Catatan</h1>
            </div>
          </div>
          <div className="bg-white h-full rounded-xl bg-white shadow-lg md:w-2/4"></div>
          <div className="bg-white h-full rounded-xl bg-white shadow-lg md:w-1/4"></div>
        </div>
        <div className="h-[85vh] flex flex-col md:flex-row  gap-5 mt-5 ">
          <div className="bg-white h-full overflow-auto px-3  rounded-xl bg-white shadow-lg order-last md:order-none md:w-1/4 ring-2 ring-lime-200">
            <div className="sticky top-0 bg-white p-3 border-b-4 text-sm lg-text-md border-red-300">
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

            <div className="  p-3 rounded-lg  ">
              {Array.from({ length: 15 }).map((_, index) => {
                return <CardRiwayat key={index} />;
              })}
            </div>
          </div>
          <div className="bg-white h-full rounded-xl bg-white shadow-lg w-3/4 ring-2 ring-lime-200 md:w-3/4 w-full">
            <TabPasien />
          </div>
        </div>
      </div>
    </div>
  );
}
