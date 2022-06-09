import React from 'react';
import styled from 'styled-components';

export default function PillButton(props: any) { // fix any
    return (
        <StyledPillButton>{props.buttonText}</StyledPillButton>
    );
};

const StyledPillButton = styled.button`
  margin: 0 auto; 
  display: block;
  background-color: #15A9E7;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: raleway;
`;