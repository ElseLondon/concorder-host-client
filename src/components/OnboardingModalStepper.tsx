import React from 'react'
import Header from './Header'
import CopyText from './CopyText'
import PillButton from './PillButton'
import TextButton from './TextButton'
import Modal from '@mui/material/Modal'
import { OnboardingCopy } from './OnboardingCopy'

interface OnboardingModalStepperProps {
  open: boolean
  handleClose: () => void
}

export default function OnboardingModalStepper(
  props: OnboardingModalStepperProps
) {
  const [step, setStep] = React.useState(1)

  const backClick = () => {
    setStep(
      step === 1 ? 1 : step - 1
    )
  }

  const nextClick = () => {
    setStep(
      step === 10 ? 10 : step + 1
    )
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

          <p style={{ color: '#CCCCCC', paddingTop: '20%' }}>{step} of 10</p>

          <div style={{ paddingTop: '10%' }}>
            <Header headerText={OnboardingCopy[step].headerText}></Header>

            <div style={{ paddingTop: '3%' }}>
              <CopyText copyText={OnboardingCopy[1].copyText}></CopyText>
            </div>

            <div style={{ display: 'inline-flex', paddingTop: '5%' }}>
              {
                step !== 1 &&
                  <PillButton
                    back
                    onClick={backClick}
                    buttonText={'Back'}
                  />
              }
              <div style={{ margin: '0.5rem', display: 'inline' }} />
              <PillButton
                onClick={nextClick}
                buttonText={step === 10 ? 'Get Started' : 'Next'}
              />
            </div>
          </div>
          <TextButton text="Skip onboarding" onClick={skipOnboardingClick}/>
        </div>
      </Modal>
    </>
  )
}
