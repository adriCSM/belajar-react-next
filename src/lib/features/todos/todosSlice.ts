import { createSlice } from '@reduxjs/toolkit';
import { pasien, igd } from '@/utils/pasien';
import { createDate } from '@/utils/attribut';

export const pasienSlice = createSlice({
  name: 'pasien',
  initialState: pasien,
  reducers: {
    addPasien(state, { payload }) {
      // const cek = Object.keys(payload).every((key) => {
      //   const value = payload[key];
      //   return value !== '' && value !== null && value !== undefined;
      // });
      // if (cek) {
      // } else {
      //   alert('Data Tidak Boleh Kosong');
      // }
      state.push({ ...payload, tgl_daftar: createDate(+new Date()) });
    },
    deletePasien(state, { payload }) {
      const item = state.find((item) => item.no_rkm_medis === payload);
      console.log(item);
    },
  },
});
export const igdSlice = createSlice({
  name: 'pasien',
  initialState: igd,
  reducers: {
    addPasien(state, { payload }) {
      // const cek = Object.keys(payload).every((key) => {
      //   const value = payload[key];
      //   return value !== '' && value !== null && value !== undefined;
      // });
      // if (cek) {
      // } else {
      //   alert('Data Tidak Boleh Kosong');
      // }
      state.push({ ...payload, tgl_daftar: createDate(+new Date()) });
    },
  },
});
