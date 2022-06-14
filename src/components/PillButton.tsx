import React from 'react'
import styled from 'styled-components'

interface PillButtonProps {
  buttonText: string
}

export default function PillButton(props: PillButtonProps) {
  return <StyledPillButton>{props.buttonText}</StyledPillButton>
}

const StyledPillButton = styled.button`
  margin: 0 auto;
  display: block;
  background-color: #15a9e7;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: raleway;
`
