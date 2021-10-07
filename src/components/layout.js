import React from 'react'
import Header from './header'
function Layout({children}) {
  return (
    <div>
      <Header></Header>
      <div className="main">{ children}</div>
    </div>
  )
}

export default Layout
