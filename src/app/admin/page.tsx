import { FaMinus, FaExpand, FaCalendar, FaBed, FaList, FaHospitalAlt } from 'react-icons/fa';

export default function AdminPage() {
  const info = [
    {
      jenis: 'Total Kamar',
      jumlah: 22,
      icon: FaBed,
      color: 'bg-blue-400',
      textColor: 'text-blue-400',
    },
    {
      jenis: 'Total Bad',
      jumlah: 454,
      icon: FaList,
      color: 'bg-pink-400',
      textColor: 'text-pink-400',
    },
    {
      jenis: 'Terisi',
      jumlah: 331,
      icon: FaHospitalAlt,
      color: 'bg-green-300',
      textColor: 'text-green-300',
    },
    {
      jenis: 'Kosong',
      jumlah: '125',
      icon: FaBed,
      color: 'bg-orange-300',
      textColor: 'text-orange-300',
    },
  ];
  return (
    <div className="w-full  bg-white mt-5 pb-10 pt-3  rounded-2xl">
      <h1 className="text-gray-400 ps-5 pt-5">Informasi Kamar</h1>
      <div className="flex justify-end px-5 text-gray-400 -mt-4 pb-5">
        <FaExpand className="me-3 h-4 w-4" />
        <FaMinus className="me-3 h-4 w-4" />
      </div>
      <div className="grid grid-cols-4 gap-4 p-5 ">
        {info.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="ring-2 ring-gray-100  rounded-xl shadow-lg ">
              <div className="flex justify-between p-3">
                <Icon className={`${item.color} text-white h-16 w-16 rounded-xl p-3  -mt-7 `} />
                <div>
                  <h1 className={`${item.textColor} text-xl font-bold`}>{item.jenis}</h1>
                  <h1 className="text-end text-gray-400">{item.jumlah}</h1>
                </div>
              </div>

              <FaCalendar key={i} className={`${item.textColor}  m-5`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
