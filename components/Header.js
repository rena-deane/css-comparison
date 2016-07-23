import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render () {
    return (
      <div id='header'>
        <Link to="/">
          <img src='../../images/rangitukia-logo.svg' alt='Rangitukia logo depicting the sun setting behind the mountain range' />
        </Link>
      </div>
    )
  }

}