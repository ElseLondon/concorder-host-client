import React from 'react'
import Header from './Header'
import CopyText from './CopyText'
import PillButton from './PillButton'
import Modal from '@mui/material/Modal'

interface OnboardingModalStepperProps {
  open: boolean
  handleClose: () => void
}

export default function OnboardingModalStepper(
  props: OnboardingModalStepperProps
) {
  const headerText = 'Welcome to Concorder!'
  const copyText = [
    'Concorder is the music player that allows a group of users to',
    'seamlessly generate a play queue where all users have a fair share',
    'of their own musical choices.'
  ]

  const backClick = () => {
    console.log('backClick')
  }

  const nextClick = () => {
    console.log('nextClick')
  }

  const skipOnboardingClick = () => {
    console.log('skipOnboardingClick')
  }

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 700,
            width: 600,
            backgroundColor: '#000000',
            padding: 4,
            color: 'white',
            outline: 0,
            borderRadius: '10px',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#CCCCCC', paddingTop: '20%' }}>1 of 10</p>
          {/* ModalContent */}
          <div style={{ paddingTop: '10%' }}>
            <Header headerText={headerText}></Header>

            <div style={{ paddingTop: '3%' }}>
              <CopyText copyText={copyText}></CopyText>
            </div>

            <div style={{ display: 'inline-flex', paddingTop: '5%' }}>
              <PillButton back onClick={backClick} buttonText={'Back'}></PillButton>
              <div style={{ margin: '0.5rem', display: 'inline' }} />
              <PillButton onClick={nextClick} buttonText={'Next'}></PillButton>
            </div>

          </div>
          {/* ~~~ */}
          <p
            onClick={skipOnboardingClick}
            style={{
              color: '#CCCCCC',
              bottom: '5vh',
              right: '27vh',
              position: 'absolute'
            }}
          >
            Skip onboarding
          </p>
        </div>
      </Modal>
    </>
  )
}
