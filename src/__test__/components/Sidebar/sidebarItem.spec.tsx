import React from 'react'
import { render, screen } from '@testing-library/react'

import SidebarItem from '../../../components/Sidebar/SidebarItem'

it('renders correct navigation text', () => {
  render(
    <SidebarItem
      index={0}
      activeIndex={1}
      item={{
        route: '/test',
        name: 'Test'
      }}
    />
  )
  const sidebarItemElement = screen.getByText('Test')
  expect(sidebarItemElement).toBeInTheDocument()
})

//
it('renders chevron, changes color and fontweight if index === activeIndex', () => {
  render(
    <SidebarItem
      index={1}
      activeIndex={1}
      item={{
        route: '/active',
        name: 'Active'
      }}
    />
  )
  // const styles = getComputedStyle(exampleDangerPillButton)

  // expect(styles.backgroundColor).toBe('red')
  // expect(styles.color).toBe('white')
  const sidebarItemElement = screen.getByText('Active')
  expect(sidebarItemElement).toHaveStyle('{color: \'white\' font-weight: \'bold\'}')
})
