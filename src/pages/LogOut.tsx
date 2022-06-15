import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import Header from '../components/Header'
import CopyText from '../components/CopyText'
import PillButton from '../components/PillButton'

export default function LogOut() {
  const [open, setOpen] = useState(window.location.href.includes('logout'))

  const headerText = 'Are you sure you want to log out?'
  const copyText = [
    'Logging out will stop music playback, make all users inactive and',
    'reset the play queue.'
  ]
  const cancelText = 'Cancel'
  const yesText = 'Yes, I\'m sure'

  const handleClose = () => setOpen(false)

  const cancelClick = () => console.log('cancelClick clicked')

  const yesClick = () => console.log('yesClick')

  return (
    <PageContainer open={open}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <div style={{ paddingTop: '30%' }}>
            <Header headerText={headerText}/>
            <CopyText
              paddingTop='3%'
              copyText={copyText}
            />

            <ButtonGroupContainer>
              <PillButton back onClick={cancelClick} buttonText={cancelText} />

              <DividerDiv />

              <PillButton danger onClick={yesClick} buttonText={yesText}/>
            </ButtonGroupContainer>
          </div>
        </ModalContainer>
      </Modal>
    </PageContainer>
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

const PageContainer = styled.div<{ open: boolean }>`
  filter: ${(props) => (props.open ? 'blur(2px) opacity(27%)' : 'none')};
  background-color: #000000;
  height: 20vh;
  width: 100vh;
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`

const ButtonGroupContainer = styled.div`
  display: inline-flex;
  padding-top: 5%;
`

const DividerDiv = styled.div`
  margin: 0.5rem;
  display: inline;
`
