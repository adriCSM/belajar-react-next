import { createSlice } from '@reduxjs/toolkit';
import { pasien, igd } from '@/utils/pasien';
import { createDate } from '@/utils/attribut';
import { Pasien } from '@/model/models';

export const pasienSlice = createSlice({
  name: 'pasien',
  initialState: pasien,
  reducers: {
    addPasien(state, { payload }) {
      state.push({ ...payload, tgl_daftar: createDate(+new Date()) });
    },
    deletePasien(state, { payload }) {
      const indexItem = state.findIndex((item: Pasien) => item.no_rkm_medis === payload);

      if (indexItem !== -1) {
        state.splice(indexItem, 1);
      }
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
