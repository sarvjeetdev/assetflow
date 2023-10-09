import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout(props) {
  const { children } = props
  console.log(props);
  return (
      <div>
          <div className='test'>
          <Sidebar />
          <div className='test2'>
            
            { children }
          
          
          </div>
          
        </div>
          
          
      </div>
  )
}