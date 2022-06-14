import React from 'react'
import Header from './Header'
import CopyText from './CopyText'
import PillButton from './PillButton'
import TextButton from './TextButton'
import Modal from '@mui/material/Modal'
import { OnboardingCopy } from './OnboardingCopy'
import styled from 'styled-components'

interface OnboardingModalStepperProps {
  open: boolean
  handleClose: () => void
}

export default function OnboardingModalStepper(
  props: OnboardingModalStepperProps
) {
  const { open, handleClose } = props
  const [step, setStep] = React.useState(1)

  const backClick = () => {
    setStep(step === 1 ? 1 : step - 1)
  }

  const nextClick = () => {
    setStep(step === 10 ? 10 : step + 1)
    if (step === 10) handleClose()
  }

  const skipOnboardingClick = () => {
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <StepHeader style={{ color: '#CCCCCC', paddingTop: '20%' }}>
          {step} of 10
        </StepHeader>

        <div style={{ paddingTop: '10%' }}>
          <Header headerText={OnboardingCopy[step].headerText}></Header>

          <div style={{ paddingTop: '3%' }}>
            <CopyText copyText={OnboardingCopy[step].copyText}></CopyText>
          </div>

          <ButtonGroupContainer>
            {step !== 1 && (
              <PillButton back onClick={backClick} buttonText={'Back'} />
            )}

            <DividerDiv />

            <PillButton
              onClick={nextClick}
              buttonText={step === 10 ? 'Get Started' : 'Next'}
            />
          </ButtonGroupContainer>
        </div>
        <TextButton text="Skip onboarding" onClick={skipOnboardingClick} />
      </ModalContainer>
    </Modal>
  )
}

const ModalContainer = styled.div`
  height: 700px;
  width: 600px;
  padding: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  color: white;
  outline: 0;
  border-radius: 10px;
  text-align: center;
`

const StepHeader = styled.p`
  color: #cccccc;
  padding-top: 20%;
`

const ButtonGroupContainer = styled.div`
  display: inline-flex;
  padding-top: 5%;
`

const DividerDiv = styled.div`
  margin: 0.5rem;
  display: inline;
`
