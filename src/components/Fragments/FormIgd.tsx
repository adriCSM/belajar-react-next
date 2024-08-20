import Input from '../Elements/Input';
import Select from '../Elements/Select';

export default function FormLanjutan({ ...props }) {
  const dokters = ['dr. FAUZAN AZHARI MARZUKI, Sp. KK-D002', 'dr. Ataaka Muhammad'];
  const jaminan = ['BPJS Kesehatan', 'Umum'];

  return (
    <div className="  sm:m-5 ">
      <h1 className="text-md sm:text-2xl font-bold ">{props.title}</h1>
      <div className="flex flex-col sm:flex-row text-sm w-full justify-between items-start divide-x">
        <div className="grid grid-cols-2 gap-x-4 pb-5 sm:p-5 text-gray-600 sm:w-2/3  sm:max-h-[500px] overflow-auto ">
          <Input type="date" id="tglDaftar" label="Tgl. Daftar" />
          <Input type="time" id="jam" label="Jam" />
          <Input
            type="text"
            id="pasien"
            label="Pasien"
            placeholder="Cari nama pasien/nomor rekam medik"
            styleParent="col-span-2 w-full"
          />
          <Select label="Dokter" id="dokter " list={dokters} styleParent="col-span-2 w-full" />
          <Select label="Penjamin" id="penjamin" list={jaminan} styleParent="col-span-2 w-full" />
        </div>
        <div className="flex flex-col sm:p-5 text-gray-600 max-h-[500px] w-full sm:w-1/3 overflow-auto text-start">
          <h1 className="text-center font-bold pb-5">Profil Pasien</h1>
          <table className="table-auto  text-left overflow-x-auto">
            <tr>
              <th className="w-1/3 sm:w-1/2">Nomor RM</th>
              <td>: -</td>
            </tr>
            <tr>
              <th>Nama Pasien</th>
              <td>: -</td>
            </tr>
            <tr>
              <th>Tanggal Lahir</th>
              <td>: -</td>
            </tr>
            <tr>
              <th>Jenis Kelamin</th>
              <td>: -</td>
            </tr>
            <tr>
              <th>Telepon</th>
              <td>: -</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
