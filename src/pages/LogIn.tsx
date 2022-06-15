import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import CopyText from '../components/CopyText'
import PillButton from '../components/PillButton'

export default function LogIn() {
  const headerText = 'Log in with Soundtrack'
  const copyText = [
    'Log in with a Soundtrack account in order to play music with through',
    'Concorder. The data that will be visible to Concorder will be listed',
    'during the authentication process.'
  ]
  const buttonText = 'Log in with Soundtrack'

  return (
    <PageContainer>
      <Header headerText={headerText}></Header>

      <CopyText copyText={copyText}></CopyText>

      <PillButton buttonText={buttonText}></PillButton>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  background-color: #000000;
  height: 20vh;
  width: 100vh;
  margin: 25px;
  border-radius: 10px;
  padding: 37vh 28vh 37vh 28vh;
`
