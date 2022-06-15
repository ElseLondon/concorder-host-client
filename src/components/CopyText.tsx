import React from 'react'
import styled from 'styled-components'

interface CopyTextProps {
  copyText: string[]
  paddingTop?: string
}

export default function CopyText(props: CopyTextProps) {
  return (
    <>
      {props.copyText.map((row, index) => (
        <div key={index}>
          <CopyRow
            paddingTop={props.paddingTop}
            key={index}
          >
              {row}
          </CopyRow>
          <br />
        </div>
      ))}
    </>
  )
}

const CopyRow = styled.p<{ paddingTop?:string }>`
  color: white;
  text-align: center;
  padding-top: ${props => props.paddingTop || '0%'};
`
