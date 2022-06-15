import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import CopyText from '../../components/CopyText'

let documentBody: RenderResult
let documentBodyWithPaddingTop: RenderResult

describe('<CopyText />', () => {
  beforeEach(() => {
    documentBody = render(
      <CopyText
        copyText={[
          'Example',
          'Copy',
          'Text.'
        ]}
      />
    )

    documentBodyWithPaddingTop = render(
      <CopyText
        copyText={[
          'Padding',
          'Top'
        ]}
        paddingTop='69%'
      />
    )
  })

  it('renders copy of each string in array', () => {
    expect(documentBody.getByText('Example')).toBeInTheDocument()
    expect(documentBody.getByText('Copy')).toBeInTheDocument()
    expect(documentBody.getByText('Text.')).toBeInTheDocument()
  })

  it('accepts padding-top argument', () => {
    const example = documentBody.getByText('Example')
    const styles = getComputedStyle(example)

    expect(styles.paddingTop).toBe('0%')
  })

  it('sets padding-top as 0% if none provided', () => {
    const example = documentBodyWithPaddingTop.getByText('Padding')
    const styles = getComputedStyle(example)

    expect(styles.paddingTop).toBe('69%')
  })
})
