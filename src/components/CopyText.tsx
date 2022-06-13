import React from 'react';
import styled from 'styled-components';


function CopyText(props: any) { // fix any
  return props.copyText.map((row: string, index: number) => {
    return(
      <>
        <CopyRow key={index}>{row}</CopyRow>
        <br/>
      </>
    );
  });
}

export default CopyText;

const CopyRow = styled.p`
  color: white;
  text-align: center;
`;
