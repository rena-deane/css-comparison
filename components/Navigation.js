import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <div className='navbar navbar-default'>
        <ul className='nav navbar-nav'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/marae">Marae</Link></li>
          <li><Link to="/te-ara-o-paikea">Paikea</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav