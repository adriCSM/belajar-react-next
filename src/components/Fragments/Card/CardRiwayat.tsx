import { LuCalendarClock } from 'react-icons/lu';
import { FaHouse, FaUserDoctor } from 'react-icons/fa6';
import { FaNotesMedical } from 'react-icons/fa';
export default function CardRiwayat({ ...props }) {
  return (
    <div className="h-auto w-auto text-xs lg:text-sm">
      <ul className="ring-2 ring-gray-500 mb-5 p-2 rounded-lg">
        <li className="flex items-center" key={`tgl${props.key}`}>
          <LuCalendarClock className="me-2" /> Jumat, 22 Januari 2022
        </li>
        <li className="flex items-center" key={`ruangan${props.key}`}>
          <FaHouse className="me-2" /> Poliklinik Anak
        </li>
        <li className="flex items-center" key={`dr${props.key}`}>
          <FaUserDoctor className="me-2" />
          dr. Nurhayati S.Pa
        </li>
        <li className="flex items-center" key={`dgns${props.key}`}>
          <FaNotesMedical className="me-2" /> Diagnosis Utama Belum ada
        </li>
      </ul>
    </div>
  );
}
