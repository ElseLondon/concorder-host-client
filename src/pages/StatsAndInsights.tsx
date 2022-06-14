import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import CopyText from '../components/CopyText'

export default function StatsAndInsights() {
  const headerText = 'Nothing to show yet'
  const copyText = [
    "There's no data to show yet. You'll start seeing some data here as",
    'soon as you get any active users.'
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
