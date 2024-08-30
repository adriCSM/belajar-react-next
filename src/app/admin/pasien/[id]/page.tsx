import CardRiwayat from '@/components/Fragments/CardRiwayat';
import { TfiReload } from 'react-icons/tfi';

type id = { params: { id: string } };
export default function DetailPasien(props: id) {
  const { id } = props.params;
  console.log(id);
  return (
    <div className="h-auto  container mx-auto p-5">
      <div className="h-60 flex gap-5">
        <div className="bg-white h-full rounded-xl bg-white shadow-lg w-1/4"></div>
        <div className="bg-white h-full rounded-xl bg-white shadow-lg w-2/4"></div>
        <div className="bg-white h-full rounded-xl bg-white shadow-lg w-1/4"></div>
      </div>
      <div className="h-[85vh] flex gap-5 mt-5 ">
        <div className="bg-white h-full overflow-auto px-3  rounded-xl bg-white shadow-lg w-1/4">
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
        <div className="bg-white h-full rounded-xl bg-white shadow-lg w-3/4"></div>
      </div>
    </div>
  );
}
