import React from 'react'
import Search from './Search'
import Logo from './Logo'
import "./header.scss"
import { ChangeEvent  } from "react";
interface Header{
  filterBySearch : (event: ChangeEvent<HTMLInputElement>) => void

}

function Header({filterBySearch}:Header) {
  return (
   <header className="header">
  <div className="wrapper">
    <div></div>
    <div className="search-box">
      <Search filterBySearch={filterBySearch}/>
    </div>
    <div className="logo">
      <Logo/>
    </div>
  </div>

   </header>
  )
}

export default Header