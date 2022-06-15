import React from 'react'
import styled from 'styled-components'

interface PillButtonProps {
  buttonText: string
  back?: boolean
  danger?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const getButtonTextColor = (back?: boolean, danger?: boolean) => {
  if (back || danger) return 'white'
  return 'black'
}

const getButtonBackgroundColor = (back?: boolean, danger?: boolean) => {
  if (back) return '#343434'
  if (danger) return 'red'
  return '#15a9e7'
}

export default function PillButton(props: PillButtonProps) {
  return (
    <StyledPillButton
      back={props.back || false}
      danger={props.danger || false}
      onClick={props.onClick || undefined}
    >
      {props.buttonText}
    </StyledPillButton>
  )
}

const StyledPillButton = styled.button<{ back?: boolean, danger?: boolean }>`
  margin: 0 auto;
  display: block;
  border: none;
  background-color: ${(props) => (getButtonBackgroundColor(props.back, props.danger))};
  color: ${(props) => (getButtonTextColor(props.back, props.danger))};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: raleway;
`
