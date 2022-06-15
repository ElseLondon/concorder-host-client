import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PillButton from '../../components/PillButton'

describe('<PillButton />', () => {
  const onClick = jest.fn()

  it('shows correct button text and handles button clicks', () => {
    const examplePillButton = render(
      <PillButton
        buttonText='Press Me!'
        onClick={onClick}
      />
    ).getByText('Press Me!')

    fireEvent.click(examplePillButton)

    expect(examplePillButton).toBeInTheDocument()
    expect(onClick).toHaveBeenCalled()
  })

  it('shows correct button text and background color for danger variant', () => {
    const exampleDangerPillButton = render(
      <PillButton
        danger
        buttonText='Danger'
        onClick={onClick}
      />
    ).getByText('Danger')

    const styles = getComputedStyle(exampleDangerPillButton)

    expect(styles.backgroundColor).toBe('red')
    expect(styles.color).toBe('white')
  })

  it('shows correct button text and background color for back variant', () => {
    const exampleBackPillButton = render(
      <PillButton
        back
        buttonText='Back'
        onClick={onClick}
      />
    ).getByText('Back')

    const styles = getComputedStyle(exampleBackPillButton)

    expect(styles.backgroundColor).toBe('rgb(52, 52, 52)')
    expect(styles.color).toBe('white')
  })
})
