import React from 'react'
import { Routes, Route } from 'react-router-dom'


function Layout() {

  return (
    
            <Routes>
              
                  <Route
                    key={1}
                    exact={true}
                    path={`/app/Noti`}
                  />
            
              <Redirect exact from="/app" to="/app/dashboard" />
              
            </Routes>
          
  )
}

export default Layout