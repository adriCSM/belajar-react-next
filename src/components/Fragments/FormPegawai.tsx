import { Pasien } from '@/model/models';
import Image from 'next/image';
import { useState } from 'react';
import Input from '../Elements/Input';
import Select from '../Elements/Select';
import TextArea from '../Elements/TextArea';
import { showFormattedDate } from '@/utils/attribut';
export default function FormRegistrasi({ datar, title }: { datar: Pasien; title: string }) {
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
    <div className="  sm:m-3 ">
      <h1 className="md:text-2xl text-lg font-bold pb-4">{datar.no_rkm_medis}</h1>
      <div className="flex flex-col sm:flex-row text-sm w-full justify-center max-h-[70vh]  overflow-auto ">
        <div className="grid grid-cols-6 w-2/3 gap-x-4 md:p-1 text-gray-600  md:max-h-[500px] mx-5 lg:mx-0 md:overflow-auto border-t-4 border-blue-300">
          <Input
            type="text"
            id="nomorRm"
            label="Kode Pegawai (NIP)"
            placeholder="Kode Pegawai (NIP)"
            required={true}
            value={datar.no_rkm_medis}
            styleParent="col-span-3"
          />
          <Input
            type="text"
            id="tglDaftar"
            label="Nama Pegawai"
            placeholder="Kode Pegawai (NIP)"
            value={datar.tgl_daftar}
            styleParent="col-span-3"
          />
          <Input
            type="text"
            id="tempatLahir"
            label="Tempat Lahir"
            value={datar.tgl_daftar}
            placeholder="Tempat Lahir"
            styleParent="col-span-2"
          />
          <Input
            type="date"
            id="jenisKelamin"
            label="Tanggal Lahir"
            placeholder="Tanggal Lahir"
            styleParent="col-span-2"
          />
          <Select
            placeholder="Pilih"
            label="Jenis Kelamin"
            id="nama"
            list={listGender}
            styleParent="col-span-2"
          />
          <TextArea styleParent="col-span-6" />
          <Input
            type="date"
            id="tgllahir"
            label="Tgl. Lahir"
            value={datar.tgl_lahir}
            styleParent="col-span-6"
          />
          <Select
            placeholder="Pilih"
            label="Darah"
            id="darah "
            list={listGolDarah}
            styleParent="col-span-3"
          />
          <Input
            type="text"
            id="namaIbu"
            label="Nama Ibu"
            placeholder="Nama Ibu"
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Status Nikah"
            id="status "
            list={listStatus}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Agama"
            id="agama "
            list={listAgama}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Pendidikan"
            id="pendidikan "
            list={listPendidikan}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-3"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-2"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-2"
          />
          <Input
            type="text"
            id="pekerjaan"
            label="Pekerjaan"
            placeholder="Pekerjaan"
            styleParent="col-span-2"
          />
          <Input
            type="text"
            id="kartu"
            label="No. Kartu"
            placeholder="Nomor Kartu"
            styleParent="col-span-2"
          />
          <Input
            type="text"
            id="kartu"
            label="No. Kartu"
            placeholder="Nomor Kartu"
            styleParent="col-span-2"
          />{' '}
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-2"
          />
          <Select
            placeholder="Pilih"
            label="Penjamin"
            id="jaminan "
            list={jaminan}
            styleParent="col-span-3"
          />
          <Input
            type="text"
            id="kartu"
            label="No. Kartu"
            placeholder="Nomor Kartu"
            styleParent="col-span-3"
          />
        </div>
        <div className=" w-1/3 gap-x-4 md:p-5 text-gray-600 md:max-h-[500px] md:overflow-auto mx-5 md:border-t-4 border-red-300 ">
          <div className="flex justify-center items-center">
            <Image src="/images/img-person.jpg" alt="" width={80} height={80} />
          </div>
          <Input type="text" id="Nomor KTP" label="Nomor KTP" placeholder="Nomor KTP" />
          <Select
            placeholder="Status"
            label="Status"
            id="Status "
            list={keluarga}
            styleParent=" w-full"
          />
          <Input
            type="text"
            id="Wajib Masuk"
            label="Wajib Masuk"
            placeholder="Wajib Masuk"
            styleParent="col-span-2 w-full"
          />

          <Input
            type="text"
            id="Pengurang"
            label="Pengurang"
            placeholder="Pengurang"
            styleParent="row-start-5"
          />
          <Input type="text" id="Index" label="Index" placeholder="Index" />
          <Select
            placeholder="Indexins"
            label="Indexins"
            id="Indexins "
            list={keluarga}
            styleParent="  w-full"
          />
          <Input type="text" id="Mulai Kontrak" label="Mulai Kontrak" placeholder="Mulai Kontrak" />
          <Input type="text" id="Cuti Diambil" label="Cuti Diambil" placeholder="Cuti Diambil" />
          <Input type="text" id="Dankes" label="Dankes" placeholder="Dankes" />
        </div>
      </div>
    </div>
  );
}
