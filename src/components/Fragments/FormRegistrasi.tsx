import { Pasien } from '@/model/models';
import Input from '../Elements/Input';
import Select from '../Elements/Select';
import TextArea from '../Elements/TextArea';
import Button from '@/components/Elements/Button';
import { FaSave } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { pasienSlice } from '@/lib/features/todos/todosSlice';
import { pasienPayload } from '@/utils/payload';

import { useDispatch } from 'react-redux';
import {
  listGolDarah,
  listGender,
  listStatus,
  listAgama,
  listPendidikan,
  jaminan,
  keluarga,
  showFormattedDate,
  createDate,
} from '@/utils/attribut';
import { useState } from 'react';

export default function FormRegistrasi({
  title,
  handleClose,
}: {
  title: string;

  handleClose: any;
}) {
  const dispatch = useDispatch();
  const [data, setData] = useState<Pasien>(pasienPayload);

  return (
    <>
      <div className="   w-full">
        <h1 className="md:text-2xl text-lg font-bold pb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row text-sm  justify-between h-[67vh] overflow-auto ">
          <div className="grid grid-cols-2 gap-x-4 px-5 text-gray-600 w-full  md:max-h-[510px] md:mx-3 md:overflow-auto border-t-2 border-blue-300">
            <Input
              type="text"
              id="nama"
              label="Nama"
              placeholder="Nama Lengkap"
              styleParent="col-span-2 w-full"
              onChange={(e: any) => setData({ ...data, nm_pasien: e.target.value })}
            />
            <Input
              type="text"
              id="nomorRm"
              label="Nomor RM"
              placeholder="Nomor RM"
              onChange={(e: any) => setData({ ...data, no_rkm_medis: e.target.value })}
              required={true}
            />

            <Select
              placeholder="Pilih"
              label="Jenis Kelamin"
              id="jenis kelamin"
              list={listGender}
              onChange={(e: any) => setData({ ...data, jk: e.target.value })}
            />
            <Input
              type="date"
              id="tgllahir"
              label="Tgl. Lahir"
              onChange={(e: any) => setData({ ...data, tgl_lahir: e.target.value })}
            />
            <Select
              placeholder="Pilih"
              label="Darah"
              id="darah "
              list={listGolDarah}
              onChange={(e: any) => setData({ ...data, gol_darah: e.target.value })}
            />
            <Select
              placeholder="Pilih"
              label="Status Nikah"
              id="status "
              list={listStatus}
              onChange={(e: any) => setData({ ...data, stts_nikah: e.target.value })}
            />
            <Select
              placeholder="Pilih"
              label="Agama"
              id="agama "
              list={listAgama}
              onChange={(e: any) => setData({ ...data, agama: e.target.value })}
            />
            <Input
              type="text"
              id="pekerjaan"
              label="Pekerjaan"
              placeholder="Pekerjaan"
              onChange={(e: any) => setData({ ...data, pekerjaan: e.target.value })}
            />
            <Select
              placeholder="Pilih"
              label="Pendidikan"
              id="pendidikan "
              list={listPendidikan}
              onChange={(e: any) => setData({ ...data, pnd: e.target.value })}
            />
            <Select
              placeholder="Pilih"
              label="Penjamin"
              id="jaminan "
              list={jaminan}
              onChange={(e: any) =>
                setData({ ...data, penjamin: { ...data.penjamin, nm_asuransi: e.target.value } })
              }
            />
            <Input
              type="text"
              id="kartu"
              label="No. Kartu"
              placeholder="Nomor Kartu"
              onChange={(e: any) =>
                setData({ ...data, penjamin: { ...data.penjamin, no_kartu: e.target.value } })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4 px-5 pb-5text-gray-600 w-full md:max-h-[510px] md:overflow-auto md:mx-3 md:border-t-2 border-blue-300 ">
            <Select
              placeholder="Pilih"
              label="Keluarga"
              id="keluarga "
              list={keluarga}
              onChange={(e: any) => setData({ ...data, keluarga: e.target.value })}
            />
            <Input type="text" id="nama" label="Nama" placeholder="Nama Keluarga" />
            <Input
              type="text"
              id="ktp"
              label="No. KTP"
              placeholder="No. KTP"
              styleParent="col-span-2 w-full"
              onChange={(e: any) => setData({ ...data, no_ktp: e.target.value })}
            />
            <TextArea
              id="alamat"
              label="Alamat"
              placeholder="Alamat Lengkap"
              styleParent="col-span-2 w-full rows-span-2"
              onChange={(e: any) => setData({ ...data, alamat: e.target.value })}
            />
            <Input
              type="text"
              id="propinsi"
              label="Provinsi"
              placeholder="Provinsi"
              styleParent="row-start-5"
              onChange={(e: any) => setData({ ...data, propinsipj: e.target.value })}
            />
            <Input
              type="text"
              id="kota"
              label="Kabupaten/Kota"
              placeholder="Kabupaten/Kota"
              onChange={(e: any) => setData({ ...data, kabupatenpj: e.target.value })}
            />
            <Input
              type="text"
              id="kecamatan"
              label="Kecamatan"
              placeholder="Kecamatan"
              onChange={(e: any) => setData({ ...data, kecamatanpj: e.target.value })}
            />
            <Input
              type="text"
              id="desa"
              label="Desa"
              placeholder="Desa/Kelurahan"
              onChange={(e: any) => setData({ ...data, kelurahanpj: e.target.value })}
            />
            <Input
              type="text"
              id="nohp"
              label="No.Hp"
              placeholder="No. Handphone"
              onChange={(e: any) => setData({ ...data, no_tlp: e.target.value })}
            />
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="Email"
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end  py-5 md:py-0">
        <Button
          text="Batal"
          styleButton="bg-white ring-red-500 text-red-500 me-2 "
          Icon={FaXmark}
          handleClick={handleClose}
        />
        <Button
          text="Simpan"
          styleButton="bg-blue-500 text-white "
          Icon={FaSave}
          // disable={btnDesible}
          handleClick={() => {
            dispatch(
              pasienSlice.actions.addPasien({ ...data, tgl_daftar: createDate(+new Date()) }),
            );
            handleClose();
          }}
        />
      </div>
    </>
  );
}
