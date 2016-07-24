import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='nav-links'>
          <Link to="/" className='nav'><h1>Rangitukia</h1></Link>
          <li><Link to="/marae" className='nav'>Marae</Link></li>
          <li><Link to="/education" className='nav'>Education</Link></li>
          <li><Link to="/church" className='nav'>Church</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav