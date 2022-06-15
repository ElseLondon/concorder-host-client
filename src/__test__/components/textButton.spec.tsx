import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextButton from '../../components/TextButton'

describe('<TextButton />', () => {
  const onClick = jest.fn()

  it('shows correct button text and handles button clicks', () => {
    const exampleTextButton = render(
      <TextButton
        text='Press Me!'
        onClick={onClick}
      />
    ).getByText('Press Me!')

    fireEvent.click(exampleTextButton)

    expect(exampleTextButton).toBeInTheDocument()
    expect(onClick).toHaveBeenCalled()
  })
})
