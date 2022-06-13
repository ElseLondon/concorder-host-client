import React from 'react';
import styled from 'styled-components';


export default function Header(props: any) { // fix any
  return (
    <StyledHeader>{props.headerText}</StyledHeader>
  );
}

const StyledHeader = styled.h2`
  color: white;
  text-align: center;
`;
