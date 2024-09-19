import { FaUserGroup } from 'react-icons/fa6';
export type Pasien = {
  id: number;
  poliklinik: string;
  tanggal_waktu: string;
  asuransi: string;
  status: string;
  pasien: {
    nama: string;
    no_reg: string;
    no_rm: string;
    no_bpjs: string;
    nik: string;
  };
};

export type Menu = {
  name: string;
  href: string;
  src: string;
};

export type Situasi = {
  name: string;
  jumlah: string;
  icon: typeof FaUserGroup;
};
