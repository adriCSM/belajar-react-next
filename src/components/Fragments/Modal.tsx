import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@/components/Elements/Button';
import { FaSave } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import { Pasien } from '@/model/models';

import { useDispatch } from 'react-redux';
import { pasienSlice } from '@/lib/features/todos/todosSlice';
import { showFormattedDate } from '@/utils/attribut';
export default function BasicModal(props: any) {
  const { styleButton, styleModal, Form, buttonText, Icon, title } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [data, setData] = useState<Pasien>({
    no_rkm_medis: '',
    nm_pasien: '',
    no_ktp: '',
    penjamin: {
      no_kartu: 0,
      nm_asuransi: '',
    },
    jk: '',
    tmp_lahir: '',
    tgl_lahir: '',
    nm_ibu: '',
    alamat: '',
    gol_darah: '',
    pekerjaan: '',
    stts_nikah: '',
    agama: '',
    tgl_daftar: '',
    no_tlp: '',
    umur: '',
    pnd: '',
    keluarga: '',
    namakeluarga: '',
    kd_pj: '',
    no_peserta: '',
    kd_kel: '',
    kd_kec: '',
    kd_kab: '',
    pekerjaanpj: '',
    alamatpj: '',
    kelurahanpj: '',
    kecamatanpj: '',
    kabupatenpj: '',
    perusahaan_pasien: '',
    suku_bangsa: '',
    bahasa_pasien: '',
    cacat_fisik: '',
    email: '',
    nip: '',
    kd_prop: '',
    propinsipj: '',
  });

  return (
    <div className="flex justify-end md:block">
      <Button handleClick={handleOpen} styleButton={styleButton} text={buttonText} Icon={Icon} />
      <Modal open={open} onClose={handleClose}>
        <Box
          className={`relative top-[50%]  left-[50%] bg-white rounded-md transform -translate-x-[50%] -translate-y-[50%] ${styleModal}`}
        >
          <FaXmark
            className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer rounded-full shadow-sm hover:bg-gray-300"
            onClick={handleClose}
          />
          <Form title={title} data={data} setData={setData} />
          <div className="flex justify-end fff py-3">
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
                dispatch(pasienSlice.actions.addPasien(data));
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
