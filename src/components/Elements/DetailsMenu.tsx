import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { pasienSlice } from '@/lib/features/todos/todosSlice';
export default function DetailMenu({ ...props }) {
  const route = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="More">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {props.icon && <props.icon className={`${props.className}`} />}
            {props.src && <Avatar src={props.src} />}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem className="flex items-center gap-2" onClick={() => route.push(props.path)}>
          <FaInfoCircle className="text-blue-500" /> Details
        </MenuItem>

        <MenuItem
          onClick={() => {
            console.log('tt');
            console.log(props.data.no_rkm_medis);
            dispatch(pasienSlice.actions.deletePasien(props.data.no_rkm_medis));
          }}
          className="flex items-center gap-2"
        >
          <FaTrashAlt className="text-red-500" /> Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
