import Image from 'next/image';
import { FaCheck, FaEllipsisV, FaMars } from 'react-icons/fa';
import DetailMenu from '../../Elements/DetailsMenu';
import { Pasien } from '@/model/models';
import { showFormattedDate } from '@/utils/attribut';
export default function Card({ data, path }: { data: Pasien; path: string }) {
  return (
    <div
      className="h-auto w-auto text-xs rounded-xl text-xs  lg:text-sm ring-1 ring-lime-300"
      key={data.no_rkm_medis}
    >
      <div className="w-full bg-lime-200 rounded-t-xl p-2 flex items-center justify-between ">
        <div className="text-gray-800 ">
          <p>{showFormattedDate(data.tgl_daftar)}</p>
        </div>
        <FaCheck className="text-lime-500 rounded-full bg-white p-2 m-1  h-6 w-6" />
      </div>
      <div>
        <div className=" flex  items-center justify-between p-2">
          <p className="px-2 text-xs py-1 text-white bg-blue-500 rounded-lg ">
            {data.penjamin.nm_asuransi}
          </p>

          <div>
            <DetailMenu icon={FaEllipsisV} path={path} data={data} />
          </div>
        </div>
        <div className=" flex  justify-center">
          <div className="relative ">
            <Image
              src="/images/img-person.jpg"
              alt=""
              className={`rounded-full`}
              height={112}
              width={112}
            />
            <FaMars className="text-blue-400 font-bold absolute bottom-4 right-4 bg-white rounded-full " />
          </div>
        </div>
        <div className="text-center  py-3 text-wrap ">
          <h1 className="font-bold p-2 h-auto">{data.nm_pasien}</h1>
          <p>No.REG: {data.no_peserta}</p>
          <p>No.RM: {data.no_rkm_medis}</p>
          <p>No.BPJS: {data.penjamin.no_kartu}</p>
          <p>NIK: {data.no_ktp}</p>
        </div>
      </div>
    </div>
  );
}
