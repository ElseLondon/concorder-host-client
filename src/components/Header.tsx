import React from 'react';
import styled from 'styled-components';

function Header(props: any) { // fix any
  return (
    <StyledHeader>{props.headerText}</StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.h2`
  color: white;
  text-align: center;
`;
