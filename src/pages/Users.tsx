import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import CopyText from '../components/CopyText'

export default function Users() {
  const headerText = 'No users to show yet'
  const copyText = [
    "You haven't had any users yet. Users will show up here as soon as",
    'they start connecting.'
  ]

  return (
    <PageContainer>
      <Header headerText={headerText}></Header>
      <CopyText copyText={copyText}></CopyText>
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
