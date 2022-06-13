import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 700,
  width: 600,
  bgcolor: '#000000',
  p: 4,
  lineHeight: 700,
  color: 'white',
  outline: 0,
  borderRadius: '10px',
  textAlign: 'center'
};

interface OnboardingModalStepperProps {
  open: boolean,
  handleClose: any,
};

export default function OnboardingModalStepper(props: OnboardingModalStepperProps) {
  return(
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};