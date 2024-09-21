import { createSlice } from '@reduxjs/toolkit';
import { pasien } from '@/utils/pasien';

export const pasienSlice = createSlice({
  name: 'pasien',
  initialState: pasien,
  reducers: {
    addPasien(state, { payload }) {
      state.push(payload);
    },
  },
});
