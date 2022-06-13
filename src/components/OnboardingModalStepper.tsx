import React from "react";
import Header from "./Header";
import CopyText from "./CopyText";
import PillButton from "./PillButton";
import Box from '@mui/material/Box';
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
  color: 'white',
  outline: 0,
  borderRadius: '10px',
  textAlign: 'center'
};

interface OnboardingModalStepperProps {
  open: boolean,
  handleClose: () => void,
};

export default function OnboardingModalStepper(props: OnboardingModalStepperProps) {
  const headerText = "Welcome to Concorder!";
  const copyText = [
    "Concorder is the music player that allows a group of users",
    "seamlessly generate a play queue where all users have a fair share",
    "of their own musical choices."
  ];

  return(
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header headerText={headerText}></Header>
          <CopyText copyText={copyText}></CopyText>

          <div className="btn-group" style={{ display: 'inline-flex'}}>
            <PillButton buttonText={"Back"}></PillButton>
            <div style={{ margin: '0.5rem', display: 'inline'}}/>
            <PillButton buttonText={"Next"}></PillButton>
          </div>
        </Box>
      </Modal>
    </>
  );
};