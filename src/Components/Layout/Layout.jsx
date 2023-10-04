import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout(props) {
  const { children } = props
  return (
      <div>
          <Sidebar />
    
          {children}
      </div>
  )
}