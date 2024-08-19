'use client';
import BasicModal from '@/components/Fragments/Modal';
import Switch from '@mui/material/Switch';
import FormRegistrasi from '@/components/Fragments/FormRegistrasi';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormReservasi from '@/components/Fragments/FormReservasi';
import Card from '@/components/Fragments/CardPasien';
export default function IPage() {
  return (
    <div className="p-5 text-gray-500">
      <div className="flex">
        <div className="w-2/3 bg-register h-80 bg-cover bg-center shadow-lg rounded-2xl  ">
          <div className="h-full w-full flex p-5 items-end justify-start">
            <span className="text-5xl font-bold text-white mb-5 ">Registrasi</span>
          </div>
        </div>
        <div className="justify-between bg-white rounded-3xl shadow-lg p-3 grid grid-cols-2 ms-5 gap-2 w-1/3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="items-center flex justify-center " key={index}>
              <div className=" ring-2 ring-lime-300 items-center rounded-lg p-2 flex bg-lime-100 justify-center ">
                <div>
                  <img src="../images/img-person.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <div className="flex flex-col justify-start ps-2">
                  <h1>569</h1>
                  <p>Antrian Pasien</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto bg-white mt-5 rounded-2xl shadow-lg p-5">
        <h1 className="text-xl font-bold ">
          Pasien <span className="font-normal text-[16px]">(546 total)</span>
        </h1>
        <div>
          <div>
            <select
              id="view"
              className=" rounded-md me-3 border-0 bg-transparent p-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Grid View</option>
              <option>List View</option>
            </select>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="(Pasien Aktif)"
              className="text-gray-500"
            />
          </div>

          <div className="flex justify-end -mt-3 me-2">
            <BasicModal
              Form={FormRegistrasi}
              styleButton="bg-transparent text-blue-500  rounded-full p-3 me-3"
              buttonText="Daftar Reservasi"
              styleModal="w-2/3 h-auto p-5"
            />
            <BasicModal
              Form={FormRegistrasi}
              styleButton="bg-blue-500  text-white hover:bg-blue-600"
              buttonText="Pasien Baru"
              styleModal="w-2/3 h-auto p-5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-between rounded-2xl p-5 ring-2 mt-5 mx-2 ring-lime-100">
          {Array.from({ length: 9 }).map((_, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
