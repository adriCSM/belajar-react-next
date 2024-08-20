import Input from '../Elements/Input';
import Button from '@/components/Elements/Button';
import { FaSave } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import Select from '../Elements/Select';
import TextArea from '../Elements/TextArea';
export default function FormRegistrasi({ ...props }) {
  const listGolDarah = ['A', 'B', 'AB', 'O'];
  const listGender = ['Laki-laki', 'Perempuan'];
  const listStatus = ['Menikah', 'Belum Menikah', 'Janda', 'Duda'];
  const listAgama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'];
  const listPendidikan = [
    'TS',
    'TK',
    'SD',
    'SMP',
    'SMA',
    'SLTA/SEDERAJAT',
    'D1',
    'D2',
    'D3',
    'D4',
    'S1',
    'S2',
    'S3',
  ];
  const jaminan = ['BPJS Kesehatan', 'Umum'];
  const keluarga = ['Ayah', 'Ibu', 'Suami', 'Istri', 'Saudara', 'Anak'];
  return (
    <div className=" sm:m-5 ">
      <h1 className="text-2xl font-bold ">{props.title}</h1>
      <div className="flex flex-col sm:flex-row text-sm w-full justify-between  ">
        <div className="grid grid-cols-2 gap-x-4 p-5 text-gray-600  max-h-[500px] overflow-auto ">
          <Input type="text" id="nomorRm" label="Nomor RM" placeholder="Nomor RM" />
          <Input type="date" id="tglDaftar" label="Tgl. Daftar" />
          <Input
            type="text"
            id="jenisKelamin"
            label="Nama"
            placeholder="Nama Lengkap"
            styleParent="col-span-2 w-full"
          />
          <Select label="Jenis Kelamin" id="nama" list={listGender} />
          <Input type="date" id="tgllahir" label="Tgl. Lahir" />
          <Input type="text" id="namaIbu" label="Nama Ibu" placeholder="Nama Ibu" />
          <Select label="Darah" id="darah " list={listGolDarah} />
          <Select label="Status Nikah" id="status " list={listStatus} />
          <Select label="Agama" id="agama " list={listAgama} />
          <Input type="text" id="pekerjaan" label="Pekerjaan" placeholder="Pekerjaan" />
          <Select label="Pendidikan" id="pendidikan " list={listPendidikan} />
          <Select label="Penjamin" id="jaminan " list={jaminan} />
          <Input type="text" id="kartu" label="No. Kartu" placeholder="Nomor Kartu" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 p-5 text-gray-600 max-h-[500px] overflow-auto ">
          <Select label="Keluarga" id="keluarga " list={keluarga} styleParent=" pb-5" />
          <Input type="text" id="nama" label="Nama" placeholder="Nama Keluarga" />
          <Input
            type="text"
            id="ktp"
            label="No. KTP"
            placeholder="No. KTP"
            styleParent="col-span-2 w-full"
          />
          <TextArea
            id="alamat"
            label="Alamat"
            placeholder="Alamat Lengkap"
            styleParent="col-span-2 w-full rows-span-2"
          />
          <Input
            type="text"
            id="propinsi"
            label="Provinsi"
            placeholder="Provinsi"
            styleParent="row-start-5"
          />
          <Input type="text" id="kota" label="Kabupaten/Kota" placeholder="Kabupaten/Kota" />
          <Input type="text" id="kecamatan" label="Kecamatan" placeholder="Kecamatan" />
          <Input type="text" id="desa" label="Desa" placeholder="Desa" />
          <Input type="text" id="nohp" label="No.Hp" placeholder="No. Handphone" />
          <Input type="email" id="email" label="Email" placeholder="Email" />
        </div>
      </div>
      <div className="flex justify-end py-3">
        <Button
          text="Batal"
          styleButton="bg-white ring-red-500 text-red-500 me-2 "
          Icon={FaXmark}
        />
        <Button text="Simpan" styleButton="bg-blue-500 text-white " Icon={FaSave} />
      </div>
    </div>
  );
}
