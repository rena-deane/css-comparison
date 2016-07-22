import React, { Component } from 'react'
import Nav from './Navigation'
import Routes from './routes'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <div id='nav-wrapper'>
          <Nav />
        </div>
        <div id='content-container'>
          {this.props.children}
        </div>
      </div>
    )
  }

}