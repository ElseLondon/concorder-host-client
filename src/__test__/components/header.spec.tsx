import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Header from '../../components/Header'

let documentBody: RenderResult

describe('<Header />', () => {
  beforeEach(() => {
    documentBody = render(<Header headerText="Example Header Text."/>)
  })

  it('shows not found message', () => {
    expect(documentBody.getByText('Example Header Text.')).toBeInTheDocument()
  })
})
