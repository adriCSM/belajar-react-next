import { LuCalendarClock } from 'react-icons/lu';
import { FaHouse, FaUserDoctor } from 'react-icons/fa6';
import { FaNotesMedical } from 'react-icons/fa';
export default function CardRiwayat() {
  return (
    <div className="h-auto w-auto text-sm">
      <ul className="ring-2 ring-gray-500 mb-5 p-2 rounded-lg">
        <li className="flex items-center">
          <LuCalendarClock className="me-2" /> Jumat, 22 Januari 2022
        </li>
        <li className="flex items-center">
          <FaHouse className="me-2" /> Poliklinik Anak
        </li>
        <li className="flex items-center">
          <FaUserDoctor className="me-2" />
          dr. Nurhayati S.Pa
        </li>
        <li className="flex items-center">
          <FaNotesMedical className="me-2" /> Diagnosis Utama Belum ada
        </li>
      </ul>
    </div>
  );
}
