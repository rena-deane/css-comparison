import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render () {
    return (
      <div id='header'>
        <Link to="/">
          <h1>Rangitukia</h1>
        </Link>
        <h1 id='logo-text'>Rangitukia</h1>
      </div>
    )
  }

}