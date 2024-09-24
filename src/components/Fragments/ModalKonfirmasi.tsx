import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@/components/Elements/Button';
import { useDispatch } from 'react-redux';

import { pasienSlice } from '@/lib/features/todos/todosSlice';
export default function BasicModal(props: any) {
  const { handleClose, styleModal, nama, open, no_rm } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-end md:block">
      <Modal open={open} onClose={handleClose}>
        <Box
          className={`relative top-[50%] p-5 w-60 left-[50%] bg-white rounded-md transform -translate-x-[50%] -translate-y-[50%] ${styleModal}`}
        >
          <div>
            <p className="text-center">
              Yakin menghapus pasien <strong>{nama}</strong>
            </p>
            <div className="flex justify-around mt-2">
              <Button
                text="Hapus"
                handleClick={() => {
                  dispatch(pasienSlice.actions.deletePasien(no_rm));
                  handleClose();
                }}
              />
              <Button handleClick={handleClose} text="Batal" styleButton="bg-red-500 text-white" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
