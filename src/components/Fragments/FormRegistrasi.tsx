import { useEffect, useRef, useState } from 'react';
import Input from '../Elements/Input';
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
  const [data, setData] = useState({
    nomorRm: '',
    tglDaftar: '',
    jenisKelamin: '',
    tglLahir: '',
    golDarah: '',
    status: '',
    agama: '',
    pendidikan: '',
    alamat: '',
    keluarga: '',
    jaminan: '',
  });

  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  const [daftar, setDaftar] = useState(`${yyyy}-${mm}-${dd}`);
  const [lahir, setLahir] = useState(`${yyyy}-${mm}-${dd}`);

  return (
    <div className="  sm:m-3 ">
      <h1 className="md:text-2xl text-lg font-bold pb-4">{props.title}</h1>
      <div className="flex flex-col sm:flex-row text-sm w-full justify-between max-h-[70vh]  overflow-auto ">
        <div className="grid grid-cols-2 gap-x-4 md:p-5 text-gray-600  md:max-h-[500px] mx-5 md:overflow-auto border-t-4 border-blue-300">
          <Input type="text" id="nomorRm" label="Nomor RM" placeholder="Nomor RM" required={true} />
          <Input
            type="date"
            id="tglDaftar"
            label="Tgl. Daftar"
            value={daftar}
            onChange={(e: any) => setDaftar(e.target.value)}
          />
          <Input
            type="text"
            id="jenisKelamin"
            label="Nama"
            placeholder="Nama Lengkap"
            styleParent="col-span-2 w-full"
          />
          <Select
            label="Jenis Kelamin"
            id="nama"
            list={listGender}
            onChange={(e: any) => props.onChange()}
          />
          <Input
            type="date"
            id="tgllahir"
            label="Tgl. Lahir"
            value={lahir}
            onChange={(e: any) => setLahir(e.target.value)}
          />
          <Input type="text" id="namaIbu" label="Nama Ibu" placeholder="Nama Ibu" />
          <Select
            label="Darah"
            id="darah "
            list={listGolDarah}
            onChange={(e: any) => props.onChange()}
          />
          <Select
            label="Status Nikah"
            id="status "
            list={listStatus}
            onChange={(e: any) => props.onChange()}
          />
          <Select
            label="Agama"
            id="agama "
            list={listAgama}
            onChange={(e: any) => props.onChange()}
          />
          <Input type="text" id="pekerjaan" label="Pekerjaan" placeholder="Pekerjaan" />
          <Select
            label="Pendidikan"
            id="pendidikan "
            list={listPendidikan}
            onChange={(e: any) => props.onChange()}
          />
          <Select
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            onChange={(e: any) => props.onChange()}
          />
          <Input type="text" id="kartu" label="No. Kartu" placeholder="Nomor Kartu" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 md:p-5 text-gray-600 md:max-h-[500px] md:overflow-auto mx-5 md:border-t-4 border-red-300 ">
          <Select
            label="Keluarga"
            id="keluarga "
            list={keluarga}
            styleParent=" pb-5"
            onChange={(e: any) => props.onChange()}
          />
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
    </div>
  );
}
