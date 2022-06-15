import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Header from '../../components/Header'

let documentBody: RenderResult

describe('<NotFound />', () => {
  beforeEach(() => {
    documentBody = render(<Header headerText="samir"/>)
  })
  it('shows not found message', () => {
    expect(documentBody.getByText('samir')).toBeInTheDocument()
  })
})
