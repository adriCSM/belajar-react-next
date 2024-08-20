import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@/components/Elements/Button';
import { FaSave } from 'react-icons/fa';
export default function BasicModal(props: any) {
  const { styleButton, styleModal, Form, buttonText, Icon, title } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button handleClick={handleOpen} styleButton={styleButton} text={buttonText} Icon={Icon} />
      <Modal open={open} onClose={handleClose}>
        <Box
          className={`relative top-[50%]  left-[50%] bg-white rounded-md transform -translate-x-[50%] -translate-y-[50%] ${styleModal}`}
        >
          <Form title={title} />
        </Box>
      </Modal>
    </div>
  );
}
