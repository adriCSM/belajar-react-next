import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@/components/Elements/Button';
import { FaSave } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
export default function BasicModal(props: any) {
  const { styleButton, styleModal, Form, buttonText, Icon, title } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [btnDesible, setBtnDesible] = useState(true);

  return (
    <div>
      <Button handleClick={handleOpen} styleButton={styleButton} text={buttonText} Icon={Icon} />
      <Modal open={open} onClose={handleClose}>
        <Box
          className={`relative top-[50%]  left-[50%] bg-white rounded-md transform -translate-x-[50%] -translate-y-[50%] ${styleModal}`}
        >
          <FaXmark
            className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer rounded-full shadow-sm hover:bg-gray-300"
            onClick={handleClose}
          />
          <Form title={title} />
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
              disable={btnDesible}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
