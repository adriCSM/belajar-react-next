import { showFormattedDate, showFormattedTime } from '@/utils/attribut';
import { useEffect, useState } from 'react';
import { FaClock, FaCalendar } from 'react-icons/fa6';

export default function FooterPage() {

    const [currentDate, setCurrentDate] = useState(+new Date());
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTime, setFormattedTime] = useState('');
  
    useEffect(() => {
      const updateDateTime = () => {
        const now = +new Date();
        setCurrentDate(now);
        setFormattedDate(showFormattedDate(now));
        setFormattedTime(showFormattedTime(now));
      };
  
      updateDateTime(); // Panggil pertama kali
      const interval = setInterval(updateDateTime, 1000); // Setiap detik
  
      return () => clearInterval(interval); // Bersihkan interval saat unmount
    }, []);
  

  return (
    <div className="sticky bottom-0 bg-lime-200 w-full z-[110] p-2  md:flex justify-between">
      <div className="text-sm flex items-center">
        <FaCalendar className="md:me-1" />{formattedDate} <FaClock className="ms-2 md:me-1" />{formattedTime}
      </div>
      <div> Copy Right &copy; Adri CSM</div>
    </div>
  );
}
