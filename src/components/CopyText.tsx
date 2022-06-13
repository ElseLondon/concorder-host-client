import React from 'react';
import styled from 'styled-components';


interface CopyTextProps {
  copyText: string[]
}

export default function CopyText(props: CopyTextProps) {
  return <>{
    props.copyText.map((row, index) => (
      <>
        <CopyRow key={index}>{row}</CopyRow>
        <br/>
      </>
    ))
  }</>;
}

const CopyRow = styled.p`
  color: white;
  text-align: center;
`;
