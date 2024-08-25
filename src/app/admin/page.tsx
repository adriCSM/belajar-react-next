'use client';
import { useState } from 'react';
import { FaMinus, FaExpand, FaCalendar, FaBed, FaList, FaHospitalAlt } from 'react-icons/fa';
import { FaCompress } from 'react-icons/fa6';

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

  const [show, setShow] = useState(false);
  return (
    <div className="min-h-svh">
      <div className="w-full h-auto  bg-white my-5 pb-10 pt-3  rounded-2xl">
        <h1 className="text-gray-400 ps-5 pt-5">Informasi Kamar</h1>
        <div className="flex justify-end  text-gray-400 -mt-4 pb-5 transition-change duration-700">
          {!show ? (
            <FaExpand
              className="me-5 h-4 w-4 text-blue-500 cursor-pointer hover:scale-125"
              onClick={() => setShow(true)}
            />
          ) : (
            <FaCompress
              className="me-5 h-4 w-4 text-blue-500 cursor-pointer hover:scale-125"
              onClick={() => setShow(false)}
            />
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 ">
          {info.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="ring-2 ring-gray-100  rounded-xl shadow-lg ">
                <div className="flex justify-between p-3">
                  <Icon
                    className={`${item.color} text-white ${
                      show ? 'h-16 w-16 -mt-7  ' : 'h-20 w-20   md:h-32 md:w-32 m-auto'
                    } rounded-xl p-3   transition-m  duration-700 `}
                  />
                  <div className={`${show ? 'text-end' : 'hidden'}`}>
                    <h1 className={`${item.textColor} md:text-3xl font-bold `}>{item.jenis}</h1>
                    <h1 className="text-end md:text-2xl ">{item.jumlah}</h1>
                  </div>
                </div>
                <FaCalendar key={i} className={`${item.textColor}  m-5 ${show ? '' : 'hidden'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
