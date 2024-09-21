import Link from 'next/link';
import { Pasien } from '@/model/models';
import { headers } from '@/utils/pasien';
export default function Table({ data }: { data: Pasien[] }) {
  return (
    <div>
      <table className="table-auto mx-auto  hover:table-fixed divide-y-2 text-center text-xs md:text-sm lg:text-md text-nowrap">
        <thead className="sticky top-0 ">
          <tr className="odd:bg-white even:bg-slate-50">
            {headers.map((item: string, index: number) => {
              return (
                <th className="bg-lime-100 p-2" key={index}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y ">
          {data.map((item: Pasien, index: number) => (
            <tr key={index} className={`odd:bg-white even:bg-lime-50`}>
              <td className="p-3 ">{item.pasien.no_rm}</td>
              <td className="p-3 text-left">
                <Link href={`/admin/pasien/${index} `} className="text-lime-500 " key={index}>
                  {' '}
                  {item.pasien.nama}
                </Link>
              </td>
              <td className="p-3 ">{item.pasien.nomor_rawat}</td>
              <td className="p-3 ">{item.pasien.bangsal}</td>
              <td className="p-3 ">{item.pasien.dokter}</td>
              <td className="p-3 ">{item.asuransi}</td>
              <td className="p-3 ">{item.pasien.nomor_asuransi}</td>
              <td className="p-3 ">{item.pasien.tanggal_masuk}</td>
              <td className="p-3 ">{item.pasien.tanggal_keluar}</td>
              <td className="p-3 ">{item.pasien.status_bayar}</td>
              <td className="p-3 ">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
