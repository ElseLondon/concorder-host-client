import React from 'react'

interface SidebarGreetingProps {
  name?: string
}

export default function SidebarGreeting(props: SidebarGreetingProps) {
  const { name } = props

  return (
    <div>
      <p style={{ color: 'white', padding: '16px 24px', margin: '4px 12px' }}>
        Hi, {name || 'stranger'}!
      </p>
    </div>
  )
}
