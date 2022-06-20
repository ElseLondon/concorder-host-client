import React from 'react'
import { render, screen } from '@testing-library/react'

import SidebarGreeting from '../../../components/Sidebar/SidebarGreeting'

it('renders with or without a name', () => {
  render(<SidebarGreeting />)
  const sidebarGreetingElement = screen.getByText('Hi, stranger!')
  expect(sidebarGreetingElement).toBeInTheDocument()

  render(<SidebarGreeting name='Pedro' />)
  const sidebarGreetingElementPedro = screen.getByText('Hi, Pedro!')
  expect(sidebarGreetingElementPedro).toBeInTheDocument()

  render(<SidebarGreeting name='Samir' />)
  const sidebarGreetingElementSamir = screen.getByText('Hi, Samir!')
  expect(sidebarGreetingElementSamir).toBeInTheDocument()
})
