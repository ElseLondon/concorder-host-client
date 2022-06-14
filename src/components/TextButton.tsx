import React from 'react'
import styled from 'styled-components'

interface TextButtonProps {
  text: string
  onClick: () => void
}

export default function TextButtonStepper(props: TextButtonProps) {
  return (
    <StyledTextButton onClick={props.onClick}>{props.text}</StyledTextButton>
  )
}

const StyledTextButton = styled.p`
  color: #cccccc;
  bottom: 5vh;
  right: 27vh;
  position: absolute;
`
