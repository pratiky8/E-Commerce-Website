import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';
import { getCart } from '../redux/cart/Action';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline: "none",
  p: 4,
  borderRadius: 2, // Added border radius here
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  const dispatch = useDispatch();


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;
