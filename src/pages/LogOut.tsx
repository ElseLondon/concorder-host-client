import React, { useState } from 'react'
import styled from 'styled-components'
// import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

export default function LogOut() {
  const [open, setOpen] = useState(false)
  console.log('open', open)

  // const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <PageContainer>
      <Button onClick={handleOpen}>Open modal</Button>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </ModalContainer>
      </Modal> */}
    </PageContainer>
  )
}

// const ModalContainer = styled.div`
//   height: 700px;
//   width: 600px;
//   padding: 4px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #000000;
//   color: white;
//   outline: 0;
//   border-radius: 10px;
//   text-align: center;
// `

const PageContainer = styled.div`
  background-color: #000000;
  height: 20vh;
  width: 100vh;
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`
