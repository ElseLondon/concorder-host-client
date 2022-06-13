import React from 'react';
import styled from 'styled-components';


interface HeaderProps {
  headerText: string
}

export default function Header(props: HeaderProps) {
  return (
    <StyledHeader>{props.headerText}</StyledHeader>
  );
}

const StyledHeader = styled.h2`
  color: white;
  text-align: center;
`;
