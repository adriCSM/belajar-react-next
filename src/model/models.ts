import { FaUserGroup } from 'react-icons/fa6';

export type Pasien = {
  no_rkm_medis: string;
  nm_pasien: string;
  no_ktp: string;
  penjamin: {
    no_kartu: number;
    nm_asuransi: string;
  };
  jk: string;
  tmp_lahir: string;
  tgl_lahir: string;
  nm_ibu: string;
  alamat: string;
  gol_darah: string;
  pekerjaan: string;
  stts_nikah: string;
  agama: string;
  tgl_daftar: string | number;
  no_tlp: string;
  umur: string;
  pnd: string;
  keluarga: string;
  namakeluarga: string;
  kd_pj: string;
  no_peserta: string;
  kd_kel: string;
  kd_kec: string;
  kd_kab: string;
  pekerjaanpj: string;
  alamatpj: string;
  kelurahanpj: string;
  kecamatanpj: string;
  kabupatenpj: string;
  perusahaan_pasien: string;
  suku_bangsa: string;
  bahasa_pasien: string;
  cacat_fisik: string;
  email: string;
  nip: string;
  kd_prop: string;
  propinsipj: string;
};
export type Igd = {
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
    bangsal: string;
    dokter: string;
    tanggal_masuk: string;
    tanggal_keluar: string;
    status_bayar: string;
    nomor_asuransi: string;
    nomor_rawat: string;
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
