import Input from '../Elements/Input';
import Select from '../Elements/Select';

export default function FormRawatInap({ ...props }) {
  const dokters = ['dr. FAUZAN AZHARI MARZUKI, Sp. KK-D002', 'dr. Ataaka Muhammad'];
  const jaminan = ['BPJS Kesehatan', 'Umum'];
  const kamar = ['ANGREK-Ang01', 'ANGREK-Ang02', 'ANGREK-Ang03'];
  const status = [
    'Sehat',
    'Rujuk',
    'APS',
    '+',
    'Meninggal',
    'Sembuh',
    'Membaik',
    'Pulang Paksa',
    '-',
    'Pindah Kamar',
    'Status Belum Lengkap',
    'Atas Persetujuan Dokter',
    'Atas Permintaan Sendiri',
  ];
  return (
    <div className="  sm:m-5 ">
      <h1 className="text-md sm:text-2xl font-bold ">{props.title}</h1>
      <div className="md:flex  text-sm w-full justify-center h-[70vh] md:h-auto  overflow-auto items-start divide-x">
        <div className="grid grid-cols-2 gap-x-4 pb-5 sm:p-5 text-gray-600 sm:w-2/3  sm:max-h-[500px] overflow-auto ">
          <Input type="date" id="tglDaftar" label="Tgl. Masuk" />
          <Input type="time" id="jammasuk" label="Jam" />
          <Input type="date" id="tglDaftar" label="Tgl. Keluar" />
          <Input type="time" id="jamkeluar" label="Jam" />
          <Select label="Kamar" id="kamar " list={kamar} placeholder="Pilihi Kamar" />
          <Input type="text" id="lama" label="Lama (Hari)" />
          <Select
            label="Dokter"
            id="dokter "
            list={dokters}
            styleParent="col-span-2 w-full"
            placeholder="Pilihi Dokter"
          />
          <Select
            label="Penjamin"
            id="penjamin"
            list={jaminan}
            styleParent="col-span-2 w-full"
            placeholder="Pilihi Jaminan"
          />
        </div>
        <div className="flex flex-col sm:p-5 text-gray-600 max-h-[500px] pb-5 sm:w-1/3 overflow-auto text-start">
          <h1 className="text-center font-bold pb-5">Profil Pasien</h1>
          <table className="table-auto  text-left">
            <thead>
              <tr>
                <th className="w-1/3 sm:w-1/2">Nomor RM</th>
                <td>: -</td>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <div>
            <Input type="text" id="lama" label="Diagnosa Keluar" />
            <Select
              label="Status Keluar"
              id="dokter "
              list={status}
              styleParent="col-span-2 w-full"
              placeholder="Status"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
