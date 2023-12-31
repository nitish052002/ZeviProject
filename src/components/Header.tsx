import React from 'react'
import Search from './Search'
import Logo from './Logo'
import "./header.scss"

function Header() {
  return (
   <header className="header">
  <div className="wrapper">
    <div></div>
    <div className="search-box">
      <Search/>
    </div>
    <div className="logo">
      <Logo/>
    </div>
  </div>

   </header>
  )
}

export default Header