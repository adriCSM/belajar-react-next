export const showFormattedDate = (date: string | number) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};
export const showFormattedTime = (date: string | number) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Date(date).toLocaleTimeString('en-us', options);
};

export const createDate = (date: number) => {
  const tgl = new Date().getDate();
  const bln = new Date().getMonth();
  const thn = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const second = new Date().getSeconds();
  return `${bln}/${tgl}/${thn} ${hour}:${minutes}:${second}`;
};

export const listGolDarah = ['A', 'B', 'AB', 'O'];
export const listGender = ['Laki-laki', 'Perempuan'];
export const listStatus = ['Menikah', 'Belum Menikah', 'Janda', 'Duda'];
export const listAgama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'];
export const listPendidikan = [
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
export const jaminan = ['BPJS Kesehatan', 'Umum'];
export const keluarga = ['Ayah', 'Ibu', 'Suami', 'Istri', 'Saudara', 'Anak'];
