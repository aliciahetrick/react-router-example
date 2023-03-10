import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white',
  }

  return (
    <>
      <nav className="nav">
        <Link to="/" style={navStyle}>
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/about" style={navStyle}>
            <li>About</li>
          </Link>
          <Link to="/shop" style={navStyle}>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
