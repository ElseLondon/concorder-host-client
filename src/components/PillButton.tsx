import React from 'react'
import styled from 'styled-components'

interface PillButtonProps {
  buttonText: string
  back?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function PillButton(props: PillButtonProps) {
  return (
    <StyledPillButton
      back={props.back || false}
      onClick={props.onClick || undefined}
    >
      {props.buttonText}
    </StyledPillButton>
  )
}

const StyledPillButton = styled.button<{ back: boolean }>`
  margin: 0 auto;
  display: block;
  border: none;
  background-color: ${(props) => (props.back ? '#343434' : '#15a9e7')};
  color: ${(props) => (props.back ? 'white' : 'black')};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: raleway;
`
